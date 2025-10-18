const {Users, UsersSchema} = require('./users.model')
const {Products, ProductsSchema} = require('./products.model')
const {Categories, CategoriesSchema } = require('./categories.model')
const { Rol, RolSchema } = require('./rol.model')
const {Movements, MovementsSchema} = require('./movements.model')


const entities=[
    {schema: RolSchema , model: Rol},
    {schema: CategoriesSchema , model: Categories},
    {schema: ProductsSchema, model: Products},
    {schema: UsersSchema, model: Users},
    {schema: MovementsSchema, model: Movements}
]

function setupModels(sequelize){
    entities.forEach(item => {
        item.model.init (item.schema, item.model.config(sequelize))
    });

    entities.forEach(item => {
        item.model.associate(sequelize.models);
    })
}
module.exports = setupModels