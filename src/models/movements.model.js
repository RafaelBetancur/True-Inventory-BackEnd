const {DataTypes, Model} = require('sequelize');
const { PRODUCTS_TABLE } = require('./products.model')
const { USERS_TABLE } = require('./users.model')

const MOVEMENTS_TABLE = 'tb_movements';

const MovementsSchema = {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PRODUCTS_TABLE,
            key: 'id'
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USERS_TABLE,
            key: 'id'
        }
    }
}