import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "blog.html"),
        cctv: resolve(__dirname, "cctv.html"),
        ceritaKami: resolve(__dirname, "ceritaKami.html"),
        contact: resolve(__dirname, "contact.html"),
        garansi: resolve(__dirname, "garansi.html"),
        kebijakan: resolve(__dirname, "kebijakan.html"),
        mainProduct: resolve(__dirname, "mainProduct.html"),
        mitra: resolve(__dirname, "mitra.html"),
        panduan: resolve(__dirname, "panduan.html"),
        productDetail: resolve(__dirname, "productDetail.html"),
      },
    },
  },
});
