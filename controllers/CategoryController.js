import Category from "../models/Category.js";

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

export {store};