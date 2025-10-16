const {DataTypes, Model} = require('sequelize')

const CATEGORIES_TABLE = 'tb_categories'

const CategoriesSchema = {
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
        allowNull: true
    }
}