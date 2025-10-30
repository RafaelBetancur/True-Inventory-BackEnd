const {createProduct,listProducts,getProducts,updateProducts,deleteProducts } = require('../../services/products/products.service')

const createProductsController = async (data) => {
  try {
    const producto = await createProduct(data);
    return(producto);
  } catch (error) {
    console.log (error);
    res.status(500).json({ error: error.message });
  }
};

const listProductsControllers = async (req, res) => {
  try {
    const productos = await listProducts()
    res.json(productos)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProducts(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedProduct = await updateProducts(id, data);
    res.json({
      message: 'Producto actualizado correctamente',
      data: updatedProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProducts(id);
    res.json({
      message: 'Producto eliminado correctamente',
      data: deletedProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  createProductsController,
  listProductsControllers ,
  getProductByIdController,
  updateProductController,
  deleteProductController
};