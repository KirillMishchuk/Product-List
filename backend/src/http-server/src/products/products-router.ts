import Router from "../../Router";
import { createProduct, getProducts } from "./products-controller";

const productRouter = new Router();

productRouter.get("/products", getProducts);
productRouter.post("/products", createProduct);

export default productRouter;
