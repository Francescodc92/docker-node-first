import Product from '../models/Product.js';
import Category from '../models/Category.js'
import mongoose from 'mongoose';


//create
const store = async (req, res) =>{
    const {name, price, quantity, category} = req.body;

    if(!name){
        return res.status(422).json({error: "il nome del prodotto è obbligatorio"});
    }else if(!price){
        return res.status(422).json({error: "il prezzo del prodotto è obbligatorio"});
    }else if(!quantity){
        return res.status(422).json({error: "la quantità del prodotto è obbligatorio"});
    }else if(!category){
        return res.status(422).json({error: "la categoria del prodotto è obbligatorio"});
    }

    try {

        if(!await Category.findById(req.body.category)){
            return res.status(422).json({error: `Category not found`})
        }

        const product = new Product({name, price, quantity, category});
        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// get all 
const index = async (req, res)=> {
    try {
        const products = await Product.find().populate({path: 'category', select: '_id name'});
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// get by id
const show = async (req, res)=> {
    try {
        const productID = req.params.id;

        if(!mongoose.isValidObjectId(productID)){
            return res.status(422).json({error: 'product id is not valid'}) 
        }

        const product = await Product.findById(productID).populate({path: 'category', select: '_id name'});

        if(!product){
            return res.status(404).json({error: 'product not found'});
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// get by category
const productByCategory = async (req, res) =>{
    try {
        const categoryID = req.params.categoryID;

        if(!mongoose.isValidObjectId(categoryID)){
            return res.status(422).json({error: 'category id is not valid'}) 
        }

        const products = await Product.find({category: categoryID}).populate({path: 'category', select: '_id name'});

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// update 
const update = async (req, res)=> {
    try {
        const productID = req.params.id;

        if(!mongoose.isValidObjectId(productID)){
            return res.status(422).json({error: 'product id is not valid'}) 
        }

        if(!await Product.exists({_id: productID})){
            return res.status(404).json({error: 'product not found'})
        }

       if(req.body.category && !await Category.findById(req.body.category)){
            return res.status(422).json({error: `Category not found`})
        }

        const value = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(productID, value, {new: true}).populate({path: 'category', select: '_id name'});
    
        return res.status(200).json(updatedProduct) 
    } catch (error) {
        return res.status(500).send(error.message);   
    }
}

//delete
const destroy = async (req, res) => {
    try {
        const productID = req.params.id;

        if(!mongoose.isValidObjectId(productID)){
            return res.status(422).json({error: 'product id is not valid'}) 
        }

        const product = await Product.findById(productID)
  
      if(!product){
        return res.status(404).json({error: 'product not found'}) 
      }else{
        await product.deleteOne()
      }
      
      return res.status(204).send();
    } catch (error) {
        return res.status(500).send(error.message);   
    }
}

export {store, index, show, productByCategory, update, destroy}