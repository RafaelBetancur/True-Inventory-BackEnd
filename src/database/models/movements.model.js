const {DataTypes, Model} = require('sequelize')
const { PRODUCTS_TABLE } = require('./products.model');
const { USER_TABLE } = require('./users.model');
 
 
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
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PRODUCTS_TABLE,
            key: 'id'
        }
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USER_TABLE,
            key: 'id'
        }
    }
}
class Movements extends Model {
    static associate(models){
        this.belongsTo(models.Products, {as: 'Products', foreignKey: 'product_id'})
        this.belongsTo(models.Users, {as: 'Users', foreignKey: 'user_id'})
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: MOVEMENTS_TABLE,
            modelName: 'Movements',
            timestamps: false
        }
    }
}
module.exports= {MOVEMENTS_TABLE,MovementsSchema,Movements}