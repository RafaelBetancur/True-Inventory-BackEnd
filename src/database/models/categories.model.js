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

class Categories extends Model {
    static associate(models){
        this.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }
    static config(sequelize){
        return{
            sequelize,
            tableName:CATEGORIES_TABLE,
            modelName: 'Categories',
            timestamps: false
        }
    }
}
module.exports = {CATEGORIES_TABLE, CategoriesSchema, Categories}