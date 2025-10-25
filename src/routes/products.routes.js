const express = require('express');
const { createProductsController, listProductsControllers } = require('../controllers/products/productsController');

const router = express.Router();

router.post('/', createProductsController);
router.get('/', listProductsControllers);


module.exports = router;

