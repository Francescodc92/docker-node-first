import { config } from 'dotenv';
import express from 'express';
import connectDB from '../db/db.js';
import productRouter from '../router/productRoute.js';
import categoryRouter from '../router/categoryRoute.js';
config()
const app = express();
app.use(express.json());
connectDB();

app.use(productRouter);
app.use(categoryRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`server running in http://localhost:${port}`);
})