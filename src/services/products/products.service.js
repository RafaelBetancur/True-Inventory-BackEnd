const {sequelize}= require("../../libs/sequelize")
const { Products }= require("../../database/models/products.model")

    const createProduct = async (data) =>{
        const newProducts = await Products.create(data);
        return newProducts;
    }
    
    const listProducts= async () => {
        const AllProducts = await Products.findAll();
        return AllProducts;
    }
    
    const getProducts= async (id) => {
        const product = await Products.findByPk(id)
        return product
        
    }
    
    const updateProducts= async (id) => {
        const Product = await Products.update(id);
        return Product;
    }
    
    
    const deleteProducts= async (id) => {
         const product = await Products.findByPk(id)
    
        if(!product) throw new Error("ID inválido");
        await product.destroy()
        return product
        
    }


module.exports = {createProduct,listProducts,getProducts,updateProducts,deleteProducts };