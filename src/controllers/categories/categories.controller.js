const { createCategory } = require('../../services/categories/categories.service');

const createCategoryController = async (req, res) => {
  try {
    const data = req.body;
    const category = await createCategory(data);
    res.status(201).json({
      message: 'Categoría creada exitosamente',
      data: category
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCategoryController };
