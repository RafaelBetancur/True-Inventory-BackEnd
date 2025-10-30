const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Users } = require('../../database/models/users.model')

const SECRET_KEY = process.env.JWT_SECRET || 'secret-key-temporal'

// Generar token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      rolId: user.rolId
    },
    SECRET_KEY,
    { expiresIn: '2h' }
  )
}

// Crear usuario
const registerUser = async ({ name, email, password, rolId }) => {
  if (!name || !email || !password || !rolId) {
    throw new Error('Todos los campos son obligatorios')
  }

  const userExists = await Users.findOne({ where: { email } })
  if (userExists) {
    throw new Error('El correo ya está registrado')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = await Users.create({
    name,
    email,
    password: hashedPassword,
    rolId
  })

  return {
    message: 'Usuario creado correctamente',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      rolId: newUser.rolId
    }
  }
}

// Login
const loginUser = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email } })
  if (!user) {
    throw new Error('Usuario no encontrado')
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    throw new Error('Contraseña incorrecta')
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, rolId: user.rolId },
    SECRET_KEY,
    { expiresIn: '2h' }
  )

  return { message: 'Login exitoso', token }
}

// Validar token
const verifyToken = (authHeader) => {
  if (!authHeader) {
    throw new Error('Token requerido')
  }

  const token = authHeader.split(' ')[1]
  const decoded = jwt.verify(token, SECRET_KEY)
  return { message: 'Token válido', user: decoded }
}

module.exports = {
  registerUser,
  loginUser,
  verifyToken,
  generateToken
}