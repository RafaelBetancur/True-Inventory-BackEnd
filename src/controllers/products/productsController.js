
const { createProducts, 
        listProducts, 
        getProducts, 
        updateProducts, 
        deleteCategory} = require('../../services/products/products.service');



// Crear un nuevo producto
exports.createProducts = async (req, res) => {
  try {
    const producto = await Products.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    console.log (error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Listar todos los productos
exports.listProducts = async (req, res) => {
  try {
    const productos = await Products.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar productos' });
  }
};

// Obtener un producto por ID
exports.getProducts = async (req, res) => {
  try {
    const producto = await Products.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Actualizar un producto por ID
exports.updateProducts = async (req, res) => {
  try {
    const producto = await Products.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    await producto.update(req.body);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por ID
exports.deleteProducts = async (req, res) => {
  try {
    const producto = await Products.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    await producto.destroy();
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};