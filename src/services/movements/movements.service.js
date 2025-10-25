const { Movements } = require ('../../database/models/movements.model')

const createMovement= async (data) => {
    const newMovement = await Movements.create(data);
    return newMovement;
}

module.exports={createMovement};