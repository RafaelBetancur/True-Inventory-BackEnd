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

class Rol extends Model {
    static associate(models){
        this.hasMany(models.Users, {
            as: 'Users',
            foreignKey: 'rol_id'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:ROL_TABLE,
            modelName: 'Rol',
            timestamps: false
        }
    }
}
module.exports={ROL_TABLE,RolSchema,Rol}