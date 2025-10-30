const { createCategory, getCategories, deleteCategory } = require('../../services/categories/categories.service');

const createCategoryController = async (req, res) => {
  try {
    const data = req.body;
    const category = await createCategory(data);
    res.status(201).json({
      message: 'Categoría creada exitosamente',
      data: category
    });
  } catch (error) {
    res.status(500).json({ 
      name: error.name,
      message: error.message
    });
  }
};

const getCategoryController = async (req, res) =>{
  try{
    const categories = await getCategories();
    res.json(categories)
  }catch (error){
    res.status(500).json({ 
      name: error.name,
      message: error.message
    })
  }
}

const deleteCategoryController = async (req, res) => {
  try
  { 
    const { id } = req.body
    const category = await deleteCategory(id);
    res.status(201).json({
       message: 'Categoría eliminada', data: category 
      });
  }catch (error){
    res.status(500).json({ 
      name: error.name,
      message: error.message 
    });
  }
}

module.exports = { createCategoryController, getCategoryController, deleteCategoryController };
