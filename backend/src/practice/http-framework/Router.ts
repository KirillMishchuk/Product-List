export default class Router {
    private endpoints: Record<string, any>;

    constructor() {
        this.endpoints = {};
    }

    request(
        method = "GET",
        path: string,
        handler: (req: any, res: any) => void
    ) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {};
        }

        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            return new Error(`${method} on ${path} exists`);
        }

        endpoint[method] = handler;

        // emitter.on(`[${path}]:[${method}]`, (req, res) => {
        //     handler(req, res);
        // });
    }

    get(path: string, handler: (req: any, res: any) => void) {
        this.request("GET", path, handler);
    }

    post(path: string, handler: (req: any, res: any) => void) {
        this.request("POST", path, handler);
    }
}
