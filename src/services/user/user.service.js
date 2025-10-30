const bcrypt = require('bcryptjs')
const { Users } = require('../database/models/users.model')

// Registrar usuario
const register = async ({ name, email, password, rolId }) => {
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
    success: true,
    message: 'Usuario creado correctamente',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      rolId: newUser.rolId
    }
  }
}

// Logeo de usuario
const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Email y contraseña son obligatorios')
  }

  const user = await Users.findOne({ where: { email } })
  if (!user) {
    throw new Error('Usuario no encontrado')
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    throw new Error('Contraseña incorrecta')
  }

  return {
    success: true,
    profile: {
      id: user.id,
      name: user.name,
      email: user.email,
      rol: user.rolId
    }
  }
}

module.exports = {
  register,
  login
}