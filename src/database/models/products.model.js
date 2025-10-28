const {DataTypes, Model,Sequelize} = require('sequelize');
const {CATEGORIES_TABLE} =require('./categories.model');

const PRODUCTS_TABLE = 'tb_products';

const ProductsSchema ={
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CATEGORIES_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}

class Products extends Model {
    static associate(models){
        this.belongsTo(models.Categories, {as: 'category',foreignKey: 'category_id'})
        this.hasMany(models.Movements, {as: 'Movements',
            foreignKey: 'product_id'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:PRODUCTS_TABLE,
            modelName: 'Products',
            timestamps: false
        }
    }
}
module.exports={PRODUCTS_TABLE,ProductsSchema,Products}