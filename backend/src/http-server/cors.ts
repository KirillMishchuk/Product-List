export default function customCors(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // or your frontend URL
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.end();
        return;
    }
}
