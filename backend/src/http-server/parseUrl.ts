import { IncomingMessage, ServerResponse } from "http";

interface Request extends IncomingMessage {
    pathname?: string;
    params?: Record<string, string>;
}

export default function parseUrl(baseUrl: string) {
    return function (req: Request, res: ServerResponse) {
        console.log("\nparseUrl middleware:");
        console.log("Original URL:", req.url);
        console.log("Base URL:", baseUrl);

        const parsedUrl = new URL(req.url || "", baseUrl);
        const params: Record<string, string> = {};

        parsedUrl.searchParams.forEach((value, key) => (params[key] = value));

        // Get the pathname from the parsed URL
        const pathname = parsedUrl.pathname;
        console.log("Pathname:", pathname);
        console.log("Query params:", params);

        req.pathname = pathname;
        req.params = params;
    };
}
