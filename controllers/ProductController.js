import Product from '../module/Product.js';

const createProduct = async (req, res) =>{
    const {name, price, quantity, category} = req.body;

    if(!name){
        return res.status(400).send({error: "il nome del prodotto è obbligatorio"});
    }else if(!price){
        return res.status(400).send({error: "il prezzo del prodotto è obbligatorio"});
    }else if(!quantity){
        return res.status(400).send({error: "la quantità del prodotto è obbligatorio"});
    }else if(!category){
        return res.status(400).send({error: "la categoria del prodotto è obbligatorio"});
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

export {createProduct, index}