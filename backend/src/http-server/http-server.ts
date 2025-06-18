import Application from "./Application";
import userRouter from "./src/users/user-router";
import parseJson from "./parseJson";
import parseUrl from "./parseUrl";
import mongoose from "mongoose";
import productRouter from "./src/products/products-router";
import customCors from "./cors";
import commentRouter from "./src/comments/comments-router";
import movieRouter from "./src/movies/movies-router";

const PORT = process.env.PORT || 5000;
const DB_SOURCE = process.env.DB_SOURCE || "test";
const BASE_URL = "http://localhost:4200/api";

const application = new Application();

// Set up middleware
application.use(customCors);
application.use(parseJson);
application.use(parseUrl("http://localhost:4200/api"));

application.addRouter(userRouter);
application.addRouter(productRouter);
application.addRouter(commentRouter);
application.addRouter(movieRouter);

const start = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(
            `mongodb+srv://user:12345@cluster0.23xok5u.mongodb.net/${DB_SOURCE}?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log("Successfully connected to MongoDB");

        application.listen(PORT, () => {
            console.log(`Server listening on ${BASE_URL}`);
        });
    } catch (e) {
        console.error("Failed to start server:", e);
        process.exit(1);
    }
};

start();
