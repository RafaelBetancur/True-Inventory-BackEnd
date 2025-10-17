// Importa las constantes y schemas con import
import { ROL_TABLE, RolSchema } from '../src/database/models/rol.model.js';
import { CATEGORIES_TABLE, CategoriesSchema } from '../src/database/models/categories.model.js';
import { PRODUCTS_TABLE, ProductsSchema } from '../src/database/models/products.model.js';
import { USER_TABLE, UsersSchema } from '../src/database/models/users.model.js';
import { MOVEMENTS_TABLE, MovementsSchema } from '../src/database/models/movements.model.js';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(ROL_TABLE, RolSchema);
  await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema);
  await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
  await queryInterface.createTable(USER_TABLE, UsersSchema);
  await queryInterface.createTable(MOVEMENTS_TABLE, MovementsSchema);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable(MOVEMENTS_TABLE);
  await queryInterface.dropTable(USER_TABLE);
  await queryInterface.dropTable(PRODUCTS_TABLE);
  await queryInterface.dropTable(CATEGORIES_TABLE);
  await queryInterface.dropTable(ROL_TABLE);
}