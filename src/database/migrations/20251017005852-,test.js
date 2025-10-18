// Importa las constantes y schemas con import
const { ROL_TABLE, RolSchema } =require('../models/rol.model');
const { CATEGORIES_TABLE, CategoriesSchema } =require('../models/categories.model');
const { PRODUCTS_TABLE, ProductsSchema } =require('../models/products.model');
const { USER_TABLE, UsersSchema } =require('../models/users.model');
const { MOVEMENTS_TABLE, MovementsSchema } =require('../models/movements.model');

module.exports ={
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ROL_TABLE, RolSchema);
    await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
    await queryInterface.createTable(USER_TABLE, UsersSchema);
    await queryInterface.createTable(MOVEMENTS_TABLE, MovementsSchema);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(MOVEMENTS_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
    await queryInterface.dropTable(ROL_TABLE);
  }
}