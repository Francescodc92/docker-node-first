import { Router } from "express";
import { store, index, show, update, destroy } from "../controllers/ProductController.js";
const productRouter = Router();

//create Product
productRouter.post('/products', store);

//get all Products
productRouter.get('/products', index);

//get Product by ID
productRouter.get('/products/:id', show);

//get Product by ID
productRouter.put('/products/:id', update);

//delete Product by ID
productRouter.delete('/products/:id', destroy);

export default productRouter;