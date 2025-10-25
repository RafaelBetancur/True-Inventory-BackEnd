const {models}= require("../../libs/sequelize")
const {Products}= require("../../database/models/products.model")


class ProductService {
    constructor(){}
    //Crear Producto
    async createProduct (data) {
        const newProducts = await Products.create(data);
        return newProducts;
    }
    
    
    //Listar Productos
    async listProducts() {
        const AllProducts = await Products.findAll();
        console.log("tonces \n",AllProducts)
        return AllProducts;
    }
    
    
    //Obtener Producto
    async getProducts(id) {
           const product = await models.Products.findByPk(id)
        return product
        
    }
    
    
    //Actualizar Producto
    async updateProducts(id) {
        const Product = await models.Products.update(id);
        return Product;
    }
    
    
    //Eliminar Productos
    async deleteProducts(id) {
         const product = await models.Products.findByPk(id)
    
        if(!product) throw new Error("ID inválido");
        await product.destroy()
        return product
        
    }
}

module.exports = ProductService;