const {DataTypes, Model} = require('sequelize');
const {CATEGORIES_TABLE} = require('./categories.model');

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
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: CATEGORIES_TABLE,
            key: 'id'
        }
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
