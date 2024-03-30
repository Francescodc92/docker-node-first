import { Router } from "express";
import { store } from "../controllers/CategoryController.js";

const categoryRouter = Router();

categoryRouter.post('/categories', store)


export default categoryRouter;