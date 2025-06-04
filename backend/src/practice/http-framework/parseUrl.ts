export default function parseUrl(baseUrl) {
    return function (req, res) {
        const parsedUrl = new URL(req.url, baseUrl);

        const params = {};

        parsedUrl.searchParams.forEach((value, key) => (params[key] = value));

        req.pathname = parsedUrl.pathname;
        req.params = params;
    };
}
