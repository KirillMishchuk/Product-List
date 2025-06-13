import fs from "fs";
import express from "express";
import https from "https";

const privateKey = fs.readFileSync("key.pem", "utf8");
const certificate = fs.readFileSync("cert.pem", "utf8");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from HTTPS!");
});

const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, () => {
    console.log("HTTPS Server running on https://localhost:3000");
});
