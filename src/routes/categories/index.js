const express = require('express');
const { createCategoryController, getCategoryController, deleteCategoryController } = require('../../controllers/categories/categories.controller');

const router = express.Router();

router.post('/', createCategoryController);
router.get('/', getCategoryController )
router.delete('/', deleteCategoryController)

module.exports = router;
