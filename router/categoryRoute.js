import { Router } from "express";
import { store, index, update, destroy } from "../controllers/CategoryController.js";

const categoryRouter = Router();

//create category
categoryRouter.post('/categories', store);

//get all categories
categoryRouter.get('/categories', index);

// //update category by ID
categoryRouter.put('/categories/:id', update);

//delete category by ID
categoryRouter.delete('/categories/:id', destroy);


export default categoryRouter;