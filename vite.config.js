import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const path = require('path');

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/]
    }
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
});
