import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = () => {
    fs.readFile(
        path.resolve(path.join(__dirname, "test"), "text.txt"),
        (err, data) => {
            if (err) {
                throw err;
            } else {
                console.log("data", data);
            }
        }
    );
};

// readFile();

const readStream = () => {
    const stream = fs.createReadStream(
        path.resolve(path.join(__dirname, "test"), "text.txt")
    );

    stream.on("data", (data) => {
        console.log("data", data);
    });

    stream.on("open", () => {
        console.log("start");
    });

    stream.on("end", () => {
        console.log("end");
    });

    stream.on("error", (err) => {
        console.log("error", err);
    });
};

// readStream();

const writableStream = () => {
    const stream = fs.createWriteStream(
        path.resolve(path.join(__dirname, "test"), "text2.txt")
    );

    for (let i = 0; i < 20; i++) {
        stream.write(i + "\n");
    }

    stream.end();
    stream.close();
    stream.destroy();
};

// writableStream();
