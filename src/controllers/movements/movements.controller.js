const { createMovement }  = require ('../../services/movements/movements.service')

const createMovementController = async (req, res) => {
    try{
        const data = req.body;
        const movement = await createMovement(data);
        res.status(201).json({
            message: 'Movimiento creado exitosamente',
            data: movement
        })
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

module.exports={createMovementController};