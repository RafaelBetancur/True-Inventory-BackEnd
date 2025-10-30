const express = require('express');
const { createMovementController, getMovementsController, getMovementByIdController, updateMovementController, deleteMovementController } = require('../controllers/movements/movements.controller');

const router = express.Router();

router.post('/', createMovementController);
router.get('/', getMovementsController);
router.get('/:id', getMovementByIdController);
router.put('/:id', updateMovementController);
router.delete('/:id', deleteMovementController);

module.exports = router;
