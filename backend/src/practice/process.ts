import dotenv from "dotenv";

dotenv.config();

console.log("commands", process.argv);
console.log("env", process.env.NODE_TEST_VAR);

process.exit();
