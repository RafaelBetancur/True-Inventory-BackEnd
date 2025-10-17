import { DataTypes, Model } from 'sequelize';
import { ROL_TABLE } from './rol.model.js';

export const USER_TABLE = 'tb_users';

export const UsersSchema = {
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ROL_TABLE,
            key: 'id'
        }
    }
}