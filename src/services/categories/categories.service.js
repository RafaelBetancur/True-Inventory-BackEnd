const sequelize = require('../../libs/sequelize')
const { Categories } = require('../../database/models/categories.model');

const createCategory = async (data) => {
    try {
        const newCategory = await Categories.create(data);
        return newCategory;
    } catch (error) {
        throw new Error('Error al crear la categoría: ' + error.message);
    }
}
const getCategories = async () => {
    try
    {
        const categories = await Categories.findAll()
        return categories
    } catch (error){
        throw new Error('Error al encontrar categorias: '+ error.message)
    }
}

module.exports = { createCategory, getCategories };