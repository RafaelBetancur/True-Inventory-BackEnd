const express = require('express');
const userRoutes = require('./user.routes');

const router = express.Router();

// Rutas de usuario
router.use('/users', userRoutes);

module.exports = router;
