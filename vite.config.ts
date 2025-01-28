import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [TanStackRouterVite(), react()],
  // server: {
  //   host: true,
  //   port: 8000, // This is the port which we will use in docker
  //   // Thanks @sergiomoura for the window fix
  //   // add the next lines if you're using windows and hot reload doesn't work
  //   watch: {
  //     usePolling: true,
  //   },
  // },
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://localhost:8080",
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src/components'),
    },
  },
});
