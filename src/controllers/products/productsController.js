const { createProduct, listProducts, getProducts, updateProducts, deleteProducts } = require('../../services/products/products.service');

const createProductsController = async (req, res) => {
    try {
        const producto = await createProduct(req.body);
        res.json(producto);
    } catch (error) {
        console.error("Error en createProductsController:", error);
        res.status(500).json({ error: error.message });
    }
};

const listProductsControllers = async (req, res) => {
    try {
        const productos = await listProducts();
        res.json(productos);
    } catch (error) {
        console.error("Error en listProductsControllers:", error);
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
        console.error("Error en getProductByIdController:", error);
        res.status(500).json({ message: error.message });
    }
};

const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        console.log("ID del producto a actualizar:", id);
        console.log("Datos que se enviarán al backend:", data);

        const updatedProduct = await updateProducts(id, data);

        res.json({
            message: 'Producto actualizado correctamente',
            data: updatedProduct
        });
    } catch (error) {
        console.error("Error en updateProductController:", error);
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
        console.error("Error en deleteProductController:", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProductsController,
    listProductsControllers,
    getProductByIdController,
    updateProductController,
    deleteProductController
};
