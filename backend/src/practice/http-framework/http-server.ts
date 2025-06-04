import Application from "./Application";
import userRouter from "./src/users/user-router";
import parseJson from "./parseJson";
import parseUrl from "./parseUrl";
import mongoose from "mongoose";
import productRouter from "./src/products/products-router";
import customCors from "./cors";

const PORT = process.env.PORT || 5000;

const application = new Application();

application.use(customCors);
application.use(parseJson);
application.use(parseUrl("http://localhost:4200"));

application.addRouter(userRouter);
application.addRouter(productRouter);

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://user:12345@cluster0.23xok5u.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
        );

        application.listen(PORT, () => {
            console.log(`Server listen on ${PORT}`);
        });
    } catch (e) {}
};

start();
