const express = require('express');
const { createCategoryController } = require('../../controllers/categories/categories.controller');

const router = express.Router();

router.post('/', createCategoryController);

module.exports = router;
