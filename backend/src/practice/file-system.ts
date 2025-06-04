import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// fs.mkdirSync(path.resolve(__dirname, "tmp"));

// fs.mkdirSync(path.resolve(path.join(__dirname, "tmp"), "tmp2", "tmp3"), {
//     recursive: true,
// });

// fs.mkdir(path.resolve(__dirname, "tmp1"), (err) => {
//     if (err) {
//         console.log("err");
//     } else {
//         console.log("success");
//     }
// });

// fs.rmdir(path.resolve(__dirname, "tmp1"), (err) => {
//     if (err) {
//         console.log("err");
//     } else {
//         console.log("success");
//     }
// });

// fs.mkdirSync(path.resolve(__dirname, "tmp"));
// fs.writeFile(
//     path.resolve(path.join(__dirname, "tmp"), "test.txt"),
//     "hello",
//     (err) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log("recorded");
//         }
//     }
// );
// fs.appendFile(
//     path.resolve(path.join(__dirname, "tmp"), "test.txt"),
//     "world",
//     (err) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log("recorded");
//         }
//     }
// );

// const writeFileAsync = async () => {
//     return new Promise((res, rej) => {
//         fs.writeFile(
//             path.resolve(path.join(__dirname, "tmp"), "test.txt"),
//             "hello",
//             (err) => {
//                 if (err) {
//                     rej(err);
//                 } else {
//                     res(1);
//                 }
//             }
//         );
//     });
// };

// writeFileAsync().then(
//     (success) => console.log("success", success),
//     (error) => console.log("error", error)
// );

const createDirAndFile = async () => {
    await fsPromise.mkdir(path.resolve(__dirname, "tmp"));
    await fsPromise.writeFile(
        path.resolve(path.join(__dirname, "tmp"), "test.txt"),
        "hello"
    );
    await fsPromise.appendFile(
        path.resolve(path.join(__dirname, "tmp"), "test.txt"),
        "world"
    );
};

// createDirAndFile();

const readFile = async () => {
    const file = await fsPromise.readFile(
        path.resolve(path.join(__dirname, "tmp"), "test.txt"),
        {
            encoding: "utf-8",
        }
    );

    console.log("file", file);
};

// readFile();

const removeFile = async () => {
    await fsPromise.unlink(
        path.resolve(path.join(__dirname, "tmp"), "test.txt")
    );
};

// removeFile();

const removeDir = async () => {
    await fsPromise.rmdir(path.resolve(__dirname, "tmp"));
};

// removeDir();
