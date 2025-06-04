import dotenv from "dotenv";
import fs from "fs/promises";

import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* инициализируем переменные среды */
dotenv.config();

/* передать строку через переменную окружения */
const text = process.env.NODE_TEST_VAR ?? "";

/* записать строку в файл */
const createDirAndFile = async () => {
    try {
        await fs.mkdir(path.resolve(__dirname, "tmp"));
        await fs.writeFile(
            path.resolve(path.join(__dirname, "tmp"), "test.txt"),
            text
        );
    } catch (e) {}
};

type Result = {
    count: number;
    length: number;
};

/* прочитать файл и посчитать количество слов и символов в файле */
const readFileAndCalculate = async () => {
    let result!: Result;

    try {
        const file = await fs.readFile(
            path.resolve(path.join(__dirname, "tmp"), "test.txt"),
            {
                encoding: "utf-8",
            }
        );

        const length = file.length;
        const count = file.split(" ").length;

        result = {
            length,
            count,
        };
    } catch (e) {}

    return result;
};

/* записать результаты в новый файл и удалить первый файл */
const writeResultsAndRemove = async ({ length, count }: Result) => {
    try {
        await fs.writeFile(
            path.resolve(path.join(__dirname, "tmp"), "count.txt"),
            `lenght: ${length}; count: ${count}`
        );
    } catch (e) {}
};

const run = async () => {
    await createDirAndFile();
    const res = await readFileAndCalculate();
    await writeResultsAndRemove(res);
    await fs.unlink(path.resolve(path.join(__dirname, "tmp"), "test.txt"));
};

run();

// console.log("env", process.env.NODE_TEST_VAR);
