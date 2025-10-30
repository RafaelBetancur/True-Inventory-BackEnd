const { createRol } = require('../../services/roles/roles.service');

const createRolConrtroller = async (req, res) => {
    try {
        const data = req.body;
        const rol = await createRol(data);
        res.status(201).json({
            message: 'Rol creado exitosamente',
            data: rol
        });

    }catch (error) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = { createRolConrtroller };