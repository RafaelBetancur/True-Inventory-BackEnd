const express = require('express');
const { createMovementController } = require('../controllers/movements/movements.controller');

const router = express.Router();

router.post('/', createMovementController);

module.exports = router;
