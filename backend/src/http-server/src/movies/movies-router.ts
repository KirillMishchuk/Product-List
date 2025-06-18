import Router from "../../Router";
import { createMovie, getMovies } from "./movies-controller";

const movieRouter = new Router();

// Register routes without /api prefix since it's added by the Application class
movieRouter.get("/movies", getMovies);
movieRouter.post("/movies", createMovie);

export default movieRouter;
