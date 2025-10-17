import {DataTypes, Model} from 'sequelize';
import {CATEGORIES_TABLE} from'./categories.model.js';

export const PRODUCTS_TABLE = 'tb_products';

export const ProductsSchema ={
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
        allowNull: false,
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

export class Products extends Model {
    static associate(models){
        this.belongsTo(models.Categories, {as: 'Category'})
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'Products',
            timestamps: false
        }
    }
}