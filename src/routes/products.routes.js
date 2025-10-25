const express = require('express');
const { createProducts, 
        listProducts, 
        getProducts, 
        updateProducts, 
        deleteProducts } = require('../controllers/products/productsController');

const router = express.Router();

router.post('/', createProducts);
router.get('/', listProducts);
router.get('/', getProducts);
router.put('/', updateProducts);
router.delete('/', deleteProducts);

module.exports = router;
