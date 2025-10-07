// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// export default defineConfig({ plugins: [react()] })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // allow access from phone
    proxy: {
      "/api": {
        target: "http://192.168.0.103:5000", // backend IP
        changeOrigin: true,
      },
    },
  },
});
