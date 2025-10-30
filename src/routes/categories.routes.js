const express = require('express');
const { createCategoryController, getCategoryController,  getCategoryByIdController, deleteCategoryController } = require('../controllers/categories/categories.controller');

const router = express.Router();

router.post('/', createCategoryController);
router.get('/', getCategoryController )
router.get('/:id', getCategoryByIdController);
router.delete('/', deleteCategoryController)

module.exports = router;
