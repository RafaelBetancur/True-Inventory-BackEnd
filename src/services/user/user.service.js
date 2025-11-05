const { Users } = require('../../database/models/users.model')

// Registrar usuario
const register = async ({ name, email, password, rolId }) => {
  if (!name || !email || !password || !rolId) {
    throw new Error('Todos los campos son obligatorios')
  }

  const userExists = await Users.findOne({ where: { email } })
  if (userExists) {
    throw new Error('El correo ya está registrado')
  }

  const newUser = await Users.create({
    name,
    email,
    password,
    rol_id: rolId // 👈 usa el nombre real del campo
  })

  return {
    success: true,
    message: 'Usuario creado correctamente',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      rolId: newUser.rol_id
    }
  }
}

// Logeo de usuario
const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Email y contraseña son obligatorios')
  }

  const user = await Users.findOne({ where: { email }, raw: true })
  if (!user) {
    throw new Error('Usuario no encontrado')
  }

  const validPassword = password === user.password
  if (!validPassword) {
    throw new Error('Contraseña incorrecta')
  }

  console.log("Usuario encontrado en login:", user);

  return {
    success: true,
    profile: {
      id: user.id,
      name: user.name,
      email: user.email,
      rol: user.rol_id
    }
  }
}

module.exports = {
  register,
  login
}
