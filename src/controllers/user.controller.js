const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Users } = require('../models/user.model')

const SECRET_KEY = process.env.JWT_SECRET || 'secret-key-temporal'

class UserController {

    // Crear usuario
    static async register(req, res) {
        try {
            const { name, email, password, rolId } = req.bod

            if (!name || !email || !password || !rolId) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios' })
            }

            const userExists = await Users.findOne({ where: { email } })
            if (userExists) {
                return res.status(400).json({ message: 'El correo ya está registrado' })
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await Users.create({
                name,
                email,
                password: hashedPassword,
                rolId
            });

            res.status(201).json({
                message: 'Usuario creado correctamente',
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    rolId: newUser.rolId
                }
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error al registrar el usuario',
                error
            })
        }
    }

    // Login usuario
    static async login(req, res) {
        try {
            const { email, password } = req.body

            const user = await Users.findOne({ where: { email } })
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' })
            }

            const validPassword = await bcrypt.compare(password, user.password)
            if (!validPassword) {
                return res.status(401).json({ message: 'Contraseña incorrecta' })
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, rolId: user.rolId },
                SECRET_KEY,
                { expiresIn: '2h' }
            )

            res.json({ message: 'Login exitoso', token })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Error en el login', error })
        }
    }

    // Validar token
    static async auth(req, res) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: 'Token requerido' })
            }

            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, SECRET_KEY)

            res.json({ message: 'Token válido', user: decoded })
        } catch (error) {
            res.status(401).json({ message: 'Token inválido o expirado', error })
        }
    }
}

module.exports = UserController
