import express, { Request } from 'express';
import multer from 'multer';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';
import FormData from 'form-data';
import fs from 'fs';

dotenv.config();
console.log('Loaded credentials:', process.env.VECTORIZER_USER, process.env.VECTORIZER_PASS);
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.post('/vectorize', upload.single('image'), async (req: Request & { file?: Express.Multer.File }, res): Promise<void> => {
  if (!req.file) {
    res.status(400).send('No file uploaded');
    return;
  }

  const { path, originalname } = req.file;
  const formData = new FormData();
  formData.append('image', fs.createReadStream(path));

  try {
    const response = await fetch('https://vectorizer.ai/api/v1/vectorize?mode=test', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${process.env.VECTORIZER_USER}:${process.env.VECTORIZER_PASS}`).toString('base64'),
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      res.status(response.status).send(`API Error: ${errorText}`);
      return;
    }

    if (response.body) {
      res.setHeader('Content-Disposition', `attachment; filename="${originalname.split('.')[0]}_converted.svg"`);
      response.body.pipe(res);
    } else {
      res.status(500).send('No response body from vectorizer');
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal server error');
  } finally {
    fs.unlinkSync(path); // clean up uploaded file
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
