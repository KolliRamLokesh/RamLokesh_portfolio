import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RamLokesh_portfolio/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three', 'three-stdlib'],
          'gsap': ['gsap', '@gsap/react'],
          'react-three': ['@react-three/fiber', '@react-three/drei', '@react-three/cannon', '@react-three/rapier', '@react-three/postprocessing'],
        }
      }
    }
  }
});