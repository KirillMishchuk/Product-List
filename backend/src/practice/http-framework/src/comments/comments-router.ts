import Router from "../../Router";
import { createComment, getComments } from "./comments-controller";

const commentRouter = new Router();

commentRouter.get("/comments", getComments);
commentRouter.post("/comments", createComment);

export default commentRouter;
