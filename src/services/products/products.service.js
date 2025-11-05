const { sequelize } = require("../../libs/sequelize");
const { Products } = require("../../database/models/products.model");

const createProduct = async (data) => {
    console.log("💾 Datos que intenta crear Sequelize:", data); // <--- agrega esto
    const newProducts = await Products.create(data);
    return newProducts;
};

const listProducts = async () => {
    const AllProducts = await Products.findAll();
    return AllProducts;
};

const getProducts = async (id) => {
    const product = await Products.findByPk(id);
    return product;
};

const updateProducts = async (id, data) => {
    try {
        // Actualizar usando Sequelize con "where"
        const [updatedRows] = await Products.update(data, {
            where: { id: id }
        });

        if (updatedRows === 0) {
            throw new Error("Producto no encontrado o no actualizado");
        }

        // Retornar producto actualizado
        const updatedProduct = await Products.findByPk(id);
        return updatedProduct;
    } catch (error) {
        console.error("Error en updateProducts:", error);
        throw error;
    }
};

const deleteProducts = async (id) => {
    const product = await Products.findByPk(id);

    if (!product) throw new Error("ID inválido");
    await product.destroy();
    return product;
};

module.exports = {
    createProduct,
    listProducts,
    getProducts,
    updateProducts,
    deleteProducts
};
