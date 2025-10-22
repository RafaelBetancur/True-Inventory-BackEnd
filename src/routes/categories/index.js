const express = require('express');
const { createCategoryController, getCategoryController } = require('../../controllers/categories/categories.controller');

const router = express.Router();

router.post('/', createCategoryController);
router.get('/', getCategoryController )

module.exports = router;
