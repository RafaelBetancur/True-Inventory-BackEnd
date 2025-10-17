import { DataTypes, Model } from 'sequelize';
import { PRODUCTS_TABLE } from './products.model.js';
import { USER_TABLE } from './users.model.js';
 
 
export const MOVEMENTS_TABLE = 'tb_movements';
 
export const MovementsSchema = {
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
            model: USER_TABLE,
            key: 'id'
        }
    }
}