/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VECTORIZER_USER: string;
  readonly VITE_VECTORIZER_PASS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}