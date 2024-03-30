import { config } from 'dotenv';
import express from 'express';
import connectDB from '../db/db.js';
import productRouter from '../router/productRoute.js';
config()
const app = express();
app.use(express.json());
connectDB();

app.use(productRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`server running in http://localhost:${port}`);
})