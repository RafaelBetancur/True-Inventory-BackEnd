const { Categories } = require('../../database/models/categories.model');

const createCategory = async (data) => {
    try {
        const existingCategory = await this.CategoryModel.findOne({ 
            where: { name: data.name } 
        });
        if (existingCategory) {
            throw new Error("Categoria yacexistente.");
        }
        const newCategory = await Categories.create(data);
        return newCategory;
    } catch (error) {
        throw new Error('Error al crear la categoría: ' + error.message);
    }
}

module.exports = { createCategory };