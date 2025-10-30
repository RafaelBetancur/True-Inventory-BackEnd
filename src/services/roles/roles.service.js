const { Rol } = require('../../database/models/rol.model');

const createRol = async (data) => {
    const newRol = await Rol.create(data);
    return newRol;
}

const getAllRoles = async () => {
    const roles = await Rol.findAll();
    return roles;
}

const getRolById = async (id) => {
    const rol = await Rol.findByPk(id);
    return rol;
}

const updateRol = async (id, data) => {
    const rol = await Rol.findByPk(id);
    if (!rol) throw new Error('Rol no encontrado');
    await rol.update(data);
    return rol;
}

const deleteRol = async (id) => {
    const rol = await Rol.findByPk(id);

    if (!rol) throw new Error('Rol no encontrado');
    await rol.destroy();
    return { message: 'Rol eliminado correctamente' };
}

module.exports = { createRol, getAllRoles, getRolById, updateRol, deleteRol };