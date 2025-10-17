import {DataTypes, Model} from 'sequelize'

export const CATEGORIES_TABLE = 'tb_categories'

export const CategoriesSchema = {
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

export class Categories extends Model {
    static associate(models){
        this.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'categoryId'
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