/// <reference types="vite/client" />
/// <reference types="redux-persist" />

interface ImportMetaEnv {
    VITE_BASE_URL: string;
    VITE_LIMIT_POST: number
    // Add other environment variables here if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}