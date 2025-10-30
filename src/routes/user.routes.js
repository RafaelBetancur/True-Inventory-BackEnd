const express = require('express')
const UserController = require('../controllers/user/user.controller')

const router = express.Router()

// Crear usuario
router.post('/register', UserController.register)

// Logeo de usuario
router.post('/login', UserController.login);

module.exports = router