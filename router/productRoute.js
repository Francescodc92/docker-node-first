import { Router } from "express";
import { store, index, show } from "../controllers/ProductController.js";
const productRouter = Router();

//create Product
productRouter.post('/products', store);

//get all Products
productRouter.get('/products', index);

//get Product by ID
productRouter.get('/products/:id', show);

export default productRouter;