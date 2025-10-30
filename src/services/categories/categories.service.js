const { Categories } = require('../../database/models/categories.model');

const createCategory = async (data) => {
    const newCategory = await Categories.create(data);
    return newCategory;
}
const getCategories = async () => {
    const categories = await Categories.findAll()
    return categories    
}

const deleteCategory = async (id) => {
    
    const category = await Categories.findByPk(id)

    if(!category) throw new Error("ID inválido");
    await category.destroy()
    return category
    
}

module.exports = { createCategory, getCategories, deleteCategory };