const express = require('express')
const UserController = require('../controllers/user/user.controller')

const router = express.Router()

// Crear usuario
router.post('/register', UserController.register)

// Login
router.post('/login', UserController.login)

// Autenticar token
router.get('/auth', UserController.auth)

module.exports = router