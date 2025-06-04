import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@entities": path.resolve(__dirname, "src/entities"),
            "@features": path.resolve(__dirname, "src/features"),
            "@widgets": path.resolve(__dirname, "src/widgets"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@shared": path.resolve(__dirname, "src/shared"),
            "@app": path.resolve(__dirname, "src/app"),
            "@components": path.resolve(__dirname, "src/components"),
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
