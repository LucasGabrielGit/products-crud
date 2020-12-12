import Router from "express";
import ProductsController from "./controllers/ProductsController";

const routes = Router();

routes.post("/products", ProductsController.create);
routes.get("/products", ProductsController.index);
routes.get("/products/:id", ProductsController.searchById);
routes.delete("/products/:id", ProductsController.deleteProduct);


export default routes;
