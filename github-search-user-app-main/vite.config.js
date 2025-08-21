import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    optimizeDeps: {
      include: ['react-feather', 'react-icons'],
    },
  },
  resolve: {
    alias: {
      'react-feather': 'react-feather/dist/index.js',
    },
  },
  plugins: [react()],
});
