import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("dirname:", __dirname);

console.log("parent:", path.join(__dirname, "..", ".."));

console.log("filename", path.join(__filename));

console.log("resolve", path.resolve("one", "two"));

const fullPath = path.resolve(__dirname, "first", "second.js");
console.log("parsing", path.parse(fullPath));
