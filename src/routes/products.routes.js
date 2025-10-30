const express = require('express');
const { 
  createProductsController,
  listProductsControllers,
  getProductByIdController,
  updateProductController,
  deleteProductController
} = require('../controllers/products/productsController');

const router = express.Router();

router.post('/create', async (req, res, next) => { 
    const product = await createProductsController(req.body)
    res.json(product)
});
router.get('/', listProductsControllers);

router.get('/:id', getProductByIdController);

router.put('/:id', updateProductController);

router.delete('/:id', deleteProductController);


module.exports = router;

