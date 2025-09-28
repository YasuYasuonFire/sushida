import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isVercel = Boolean(process.env.VERCEL);
const isStaticSubPath = process.env.NODE_ENV === 'production' && !isVercel;

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
});
