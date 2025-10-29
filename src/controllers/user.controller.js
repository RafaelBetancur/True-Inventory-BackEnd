const userService = require('../services/user.service')

// Crear usuario
const register = async (req, res) => {
  try {
    const user = await userService.register(req.body)
    res.status(201).json({
      message: 'Usuario creado correctamente',
      user
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

// Login
const login = async (req, res) => {
  try {
    const { token } = await userService.login(req.body)
    res.status(200).json({
      message: 'Login exitoso',
      token
    })
  } catch (error) {
    const status = error.message === 'Usuario no encontrado' ? 404 : 401
    res.status(status).json({ message: error.message })
  }
}

// Verificar token
const auth = async (req, res) => {
  try {
    const user = await userService.auth(req.headers.authorization)
    res.status(200).json({
      message: 'Token válido',
      user
    })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

module.exports = {
  register,
  login,
  auth
}
