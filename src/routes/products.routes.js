const express = require('express');
const { createProductsController, listProductsControllers } = require('../controllers/products/productsController');

const router = express.Router();

router.post('/create', async (req, res, next) => { 
    const product = await createProductsController(req.body)
    res.json(product)
});
router.get('/', listProductsControllers);


module.exports = router;

