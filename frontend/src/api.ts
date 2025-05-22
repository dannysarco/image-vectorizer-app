/// <reference types="vite/client" />

// src/api.ts
export async function vectorizeImage(file: File): Promise<Blob> {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch('http://localhost:3001/vectorize', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Proxy error: ${response.status} - ${errorText}`);
  }

  return await response.blob();
}