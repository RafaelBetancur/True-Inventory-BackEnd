const { Movements } = require ('../../database/models/movements.model')

const createMovement= async (data) => {
    const newMovement = await Movements.create(data);
    return newMovement;
}

const getMovements = async () => {
  const movements = await Movements.findAll({
    include: ['Products', 'Users']
  });
  return movements;
};

const getMovementById = async (id) => {
  const movement = await Movements.findByPk(id, {
    include: ['Products', 'Users']
  });
  if (!movement) throw new Error('Movimiento no encontrado');
  return movement;
};

const updateMovement = async (id, data) => {
  const movement = await Movements.findByPk(id);
  if (!movement) throw new Error('Movimiento no encontrado');
  await movement.update(data);
  return movement;
};

const deleteMovement = async (id) => {
  const movement = await Movements.findByPk(id);
  if (!movement) throw new Error('Movimiento no encontrado');
  await movement.destroy();
  return movement;
};

module.exports = {
  createMovement,
  getMovements,
  getMovementById,
  updateMovement,
  deleteMovement
};