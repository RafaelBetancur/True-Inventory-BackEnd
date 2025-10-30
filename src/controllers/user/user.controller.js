const userService = require('../../services/user/user.service')

// Crear usuario
const register = async (req, res) => {
  try {
    const result = await userService.register(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Logeo de usuario
const login = async (req, res) => {
  try {
    const result = await userService.login(req.body)
    res.status(200).json(result)
  } catch (error) {
    const status = error.message === 'Usuario no encontrado' ? 404 : 401
    res.status(status).json({ message: error.message })
  }
};

module.exports = {
  register,
  login
};
