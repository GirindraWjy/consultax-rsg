import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true, // handle modul campuran ESM + CJS
      include: [/node_modules/], // pastikan semua CJS boleh di-transform
    },
  },
  optimizeDeps: {
    include: ['debug', 'extend'], // tambahkan modul problematik
  },
});
