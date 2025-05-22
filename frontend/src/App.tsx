// App.tsx
import React, { useState } from 'react';
import './index.css';
import { vectorizeImage } from './api';
// Import the vectorizeImage function from api.ts
// Ensure you have the correct path to the api.ts file
// and that the function is exported correctly.
// Ensure you have the correct path to the api.ts file
// and that the function is exported correctly.
// Ensure you have the correct path to the api.ts file
// and that the function is exported correctly.
// Ensure you have the correct path to the api.ts file
// and that the function is exported correctly.

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(uploadedFile.type)) {
      setStatus('Unsupported file format. Please upload JPG, PNG, or GIF.');
      return;
    }
    if (uploadedFile.size > 5 * 1024 * 1024) {
      setStatus('File size exceeds 5MB limit.');
      return;
    }
    setFile(uploadedFile);
    setStatus('');
    setPreview(URL.createObjectURL(uploadedFile));
  };

  const handleConvert = async () => {
    if (!file) {
      setStatus('Please upload a valid image first.');
      return;
    }
    setIsLoading(true);
    setStatus('Converting...');
    try {
      const svgBlob = await vectorizeImage(file);
      const downloadUrl = URL.createObjectURL(svgBlob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `${file.name.split('.')[0]}_converted.svg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setStatus('Conversion successful! File downloaded.');
    } catch (error: any) {
      setStatus(`Conversion failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-slate-200">
        <h1 className="text-3xl font-semibold mb-6 text-center text-slate-800">Image Vectorizer</h1>

        <label className="block mb-4">
          <input
            type="file"
            accept="image/png, image/jpeg, image/gif"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </label>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mb-4 rounded-lg border border-gray-300 object-contain max-h-48 w-full"
          />
        )}

        <button
          onClick={handleConvert}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 disabled:opacity-50"
        >
          {isLoading ? 'Converting...' : 'Convert to SVG'}
        </button>

        {status && <p className="mt-4 text-center text-sm text-gray-700 italic">{status}</p>}
      </div>
    </div>
  );
};

export default App;