
const {createProduct,listProducts,getProducts,updateProducts,deleteProducts } = require('../../services/products/products.service')



// Crear un nuevo producto
const createProductsController = async (data) => {
  try {
    const producto = await createProduct(data);
    return(producto);
  } catch (error) {
    console.log (error);
    return{ error: 'Error al crear el producto' };
  }
};

// Listar todos los productos
const listProductsControllers = async (req, res) => {
  try {
    const productos = await listProducts()
    res.json(productos)
  } catch (error) {
    res.status(500).json({ error: 'Error al listar productos' });
  }
};

module.exports={createProductsController, listProductsControllers}