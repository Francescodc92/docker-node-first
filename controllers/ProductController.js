import Product from '../module/Product.js';
import mongoose from 'mongoose';

const store = async (req, res) =>{
    const {name, price, quantity, category} = req.body;

    if(!name){
        return res.status(400).json({error: "il nome del prodotto è obbligatorio"});
    }else if(!price){
        return res.status(400).json({error: "il prezzo del prodotto è obbligatorio"});
    }else if(!quantity){
        return res.status(400).json({error: "la quantità del prodotto è obbligatorio"});
    }else if(!category){
        return res.status(400).json({error: "la categoria del prodotto è obbligatorio"});
    }

    try {
        const product = new Product({name, price, quantity, category});
        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const index = async (req, res)=> {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const show = async (req, res)=> {
    try {
        const productID = req.params.id;

        if(!mongoose.isValidObjectId(productID)){
            return res.status(422).json({error: 'product id is not valid'}) 
        }

        const product = await Product.findById(productID);

        if(!product){
            return res.status(404).json({error: 'product not found'});
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


export {store, index, show}