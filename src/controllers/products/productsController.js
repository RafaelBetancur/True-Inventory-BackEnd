
const ProductService = require('../../services/products/products.service');
const service = new ProductService()



// Crear un nuevo producto
const createProductsController = async (req, res) => {
  try {
    const producto = await service.createProduct(req.body);
    res.status(201).json(producto);
  } catch (error) {
    console.log (error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Listar todos los productos
const listProductsControllers = async (req, res) => {
  try {
    const productos = await service.listProducts()
    return productos
  } catch (error) {
    res.status(500).json({ error: 'Error al listar productos' });
  }
};

module.exports={createProductsController, listProductsControllers}