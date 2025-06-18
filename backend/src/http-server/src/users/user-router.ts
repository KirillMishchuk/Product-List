import Router from "../../Router";
import { createUser, getUsers } from "./user-controller";

const userRouter = new Router();

userRouter.get("/users", getUsers);

userRouter.post("/users", createUser);

export default userRouter;
