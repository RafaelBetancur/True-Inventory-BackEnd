import { DataTypes, Model } from 'sequelize';
 
export const ROL_TABLE = 'tb_rol';
 
export const RolSchema = {
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