const {sequelize}= require("../../libs/sequelize")
const { Products }= require("../../database/models/products.model")


    //Crear Producto
    const createProduct = async (data) =>{
        const newProducts = await Products.create(data);
        return newProducts;
    }
    
    
    //Listar Productos
    const listProducts= async () => {
        const AllProducts = await Products.findAll();
        return AllProducts;
    }
    
    
    //Obtener Producto
    const getProducts= async (id) => {
           const product = await models.Products.findByPk(id)
        return product
        
    }
    
    
    //Actualizar Producto
    const updateProducts= async (id) => {
        const Product = await models.Products.update(id);
        return Product;
    }
    
    
    //Eliminar Productos
    const deleteProducts= async (id) => {
         const product = await models.Products.findByPk(id)
    
        if(!product) throw new Error("ID inválido");
        await product.destroy()
        return product
        
    }


module.exports = {createProduct,listProducts,getProducts,updateProducts,deleteProducts };