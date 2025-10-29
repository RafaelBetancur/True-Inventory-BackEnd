const userService = require('../services/user.service')

// Crear usuario
const register = async (req, res) => {
  try {
    const result = await userService.registerUser(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Login
const login = async (req, res) => {
  try {
    const result = await userService.loginUser(req.body)
    res.status(200).json(result)
  } catch (error) {
    const status = error.message === 'Usuario no encontrado' ? 404 : 401
    res.status(status).json({ message: error.message })
  }
}

// Autenticación del token
const auth = async (req, res) => {
  try {
    const result = userService.verifyToken(req.headers.authorization)
    res.status(200).json(result)
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

module.exports = {
  register,
  login,
  auth
}