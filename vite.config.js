import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Pic-A-Moment-/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        packages: resolve(__dirname, 'packages.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        howItWorks: resolve(__dirname, 'how-it-works.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
})
