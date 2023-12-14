import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    assetsInclude: ["./**/*.*"],
    build: {
        emptyOutDir: true, 
        outDir: "../dist"
    },
    server: {
        host: true
    }
})