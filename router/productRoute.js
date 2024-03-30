import { Router } from "express";
import { createProduct, index } from "../controllers/ProductController.js";
const productRouter = Router();

//create Product
productRouter.post('/products', createProduct);

//get all Products
productRouter.get('/products', index);

export default productRouter;