import mongoose from "mongoose";
import Category from "../models/Category.js";
import Product from "../models/Product.js";

//create
const store = async (req, res)=> {
    const categosyName = req.body.name;
    if(!categosyName){
        return res.status(422).json({error: 'Name field is required'})
    }

    try {

        if(await Category.findOne({name: categosyName})){
            return res.status(409).json({error: `The category ${categosyName} already exists`})
        }
    
        const newCategory = await Category.create(req.body)
        return res.status(201).json(newCategory);
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
   
}

//get all
const index = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({error: error.message}) 
    }
}

//update
const update = async (req, res) => {
    try {
        const categoryID = req.params.id;
      //validation id 
      if(!mongoose.isValidObjectId(categoryID)){
        return res.status(422).json({error: 'category id is not valid'}) 
      }
  
      if(!await Category.exists({_id: categoryID})){
        return res.status(404).json({error: 'category not found'})
      }

      if(await Category.findOne({name: categosyName})){
        return res.status(409).json({error: `The category ${categosyName} already exists`})
    }
  
      const value = req.body;
      const updatedCategory = await Category.findByIdAndUpdate(categoryID, value, {new: true});
  
      return res.status(200).json(updatedCategory) 
    } catch (error) {
      return res.status(500).json({error: error.message}) 
    }
}

//delete
const destroy = async (req, res) => {
    try {
        const categoryID = req.params.id;

        if(!mongoose.isValidObjectId(categoryID)){
          return res.status(422).json({error: 'category id is not valid'}) 
        }
        const category = await Category.findById(categoryID)

        if(!category){
            return res.status(404).json({error: 'category not found'}) 
        }else{
            const productsCount = await Product.countDocuments({category:category._id})

            if(productsCount > 0){
                return res.status(409).json({error: `Category ${category.name} is being use in ${productsCount} products`})
            }

            await category.deleteOne();
        }

        return res.status(204).send() 
  
    } catch (error) {
        return res.status(500).json({error: error.message})   
    }
}

export {store, index, update, destroy};