const {DataTypes, Model} = require('sequelize');

const ROL_TABLE = 'tb_rol';

const RolSchema = {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }
}