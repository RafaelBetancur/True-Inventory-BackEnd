const { DataTypes, Model } = require('sequelize');
const { ROL_TABLE } =require('./rol.model');

const USER_TABLE = 'tb_users';

const UsersSchema = {
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

class Users extends Model {
    static associate(models){
        this.belongsTo(models.Rol, {as: 'Rol'})
        this.hasMany(models.Movements, {as: 'Movements',
            foreignKey: 'userId'
        })
    }
    static config(sequelize){
            return{
                sequelize,
                tableName: USER_TABLE,
                modelName: 'Users',
                timestamps: false
            }
        }
}
module.exports= {USER_TABLE,UsersSchema,Users}