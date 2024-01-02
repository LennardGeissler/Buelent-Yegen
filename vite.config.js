import { defineConfig } from "vite";

export default defineConfig({
    root: "src",
    assetsInclude: ['src/assets/**/*.*'],
    build: {
        emptyOutDir: true,
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: 'src/index.html',
                page2: 'src/kanzlei.html',
                page3: 'src/team.html',
                page4: 'src/leistungsspektrum.html',
                page5: 'src/kontakt.html',
            }
        }
    },
    server: {
        host: true
    }
})