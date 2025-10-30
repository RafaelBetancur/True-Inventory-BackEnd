const { createMovement, getMovements, getMovementById, updateMovement, deleteMovement }  = require ('../../services/movements/movements.service')

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

const getMovementsController = async (req, res) => {
  try {
    const movements = await getMovements();
    res.json(movements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovementByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const movement = await getMovementById(id);
    res.json(movement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateMovementController = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedMovement = await updateMovement(id, data);
    res.json({
      message: 'Movimiento actualizado correctamente',
      data: updatedMovement
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMovementController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovement = await deleteMovement(id);
    res.json({
      message: 'Movimiento eliminado correctamente',
      data: deletedMovement
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports={createMovementController, getMovementsController, getMovementByIdController, updateMovementController, deleteMovementController};