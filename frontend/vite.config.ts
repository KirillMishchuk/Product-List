import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import inject from "@rollup/plugin-inject";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), mkcert(), tsconfigPaths(), svgr(), tailwindcss()],
    server: {
        port: 9001,
        proxy: {},
        https: {},
        host: true,
    },
    resolve: {
        alias: {
            buffer: "buffer",
            process: "process/browser",
        },
    },
    build: {
        rollupOptions: {
            plugins: [
                inject({ Buffer: ["buffer/", "Buffer"] }),
                nodePolyfills(),
            ],
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            define: {
                global: "globalThis",
            },
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                    process: true,
                }),
            ],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [path.join(__dirname, "src")],
                api: "modern-compiler",
                quietDeps: true,
            },
        },
    },
});
