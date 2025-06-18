import http from "http";
import EventEmitter from "events";

interface Request extends http.IncomingMessage {
    body?: any;
    pathname?: string;
    method?: string;
}

export default class Application {
    private emitter: EventEmitter;
    private server: http.Server;
    private middlewares: Array<
        (req: Request, res: http.ServerResponse) => void
    >;
    private basePath: string;

    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middlewares = [];
        this.basePath = "/api";
        console.log("Application initialized with base path:", this.basePath);
    }

    use(middleware: (req: Request, res: http.ServerResponse) => void) {
        this.middlewares.push(middleware);
    }

    listen(port: number, callback: () => void) {
        this.server.listen(port, callback);
    }

    addRouter(router: any) {
        console.log("Adding router with endpoints:", router.endpoints);
        Object.keys(router.endpoints).forEach((path) => {
            const endpoint = router.endpoints[path];
            console.log(
                `Registering route: ${path} with methods:`,
                Object.keys(endpoint)
            );

            Object.keys(endpoint).forEach((method) => {
                const routeMask = this._getRouteMask(path, method);
                console.log(`Setting up route mask: ${routeMask}`);
                this.emitter.on(
                    routeMask,
                    (req: Request, res: http.ServerResponse) => {
                        console.log(
                            `Handling request for route mask: ${routeMask}`
                        );
                        const handler = endpoint[method];
                        handler(req, res);
                    }
                );
            });
        });
    }

    _createServer() {
        return http.createServer((req: Request, res: http.ServerResponse) => {
            console.log("\nNew request received:");
            console.log("URL:", req.url);
            console.log("Method:", req.method);

            let body = "";

            req.on("data", (chunk) => {
                body += chunk;
            });

            req.on("end", () => {
                if (body) {
                    req.body = JSON.parse(body);
                }

                console.log("Applying middlewares...");
                this.middlewares.forEach((middleware) => middleware(req, res));

                console.log("After middleware - Request details:");
                console.log("Pathname:", req.pathname);
                console.log("Base path:", this.basePath);

                // Check if the request path starts with the base path
                if (!req.pathname || !req.pathname.startsWith(this.basePath)) {
                    console.log(
                        "Path does not start with base path - returning 404"
                    );
                    res.statusCode = 404;
                    res.end("Not Found");
                    return;
                }

                // Remove the base path for route matching
                const routePath = req.pathname.slice(this.basePath.length);
                const routeMask = this._getRouteMask(
                    routePath,
                    req.method || "GET"
                );
                console.log("Looking for route mask:", routeMask);

                const emitted = this.emitter.emit(routeMask, req, res);
                console.log("Route handler found:", emitted);

                if (!emitted) {
                    console.log("No route handler found - returning 404");
                    res.statusCode = 404;
                    res.end("Not Found");
                }
            });
        });
    }

    _getRouteMask(path: string, method: string) {
        return `[${path}]:[${method}]`;
    }
}
