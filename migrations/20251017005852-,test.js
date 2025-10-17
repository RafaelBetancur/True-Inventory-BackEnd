'use strict';
import { CategoriesSchema, CATEGORIES_TABLE } from "../src/database/models/categories.model.js";
import { MovementsSchema, MOVEMENTS_TABLE } from "../src/database/models/movements.model.js";
import { ProductsSchema, PRODUCTS_TABLE } from "../src/database/models/products.model.js";
import { RolSchema, ROL_TABLE } from "../src/database/models/rol.model.js";
import { UsersSchema, USER_TABLE } from "../src/database/models/users.model.js";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(ROL_TABLE, RolSchema )
    await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema)
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema)
    await queryInterface.createTable(USER_TABLE, UsersSchema)
    await queryInterface.createTable(MOVEMENTS_TABLE, MovementsSchema)
  },
  
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
    *
    * Example:
    * await queryInterface.dropTable('users');
    */
   await queryInterface.dropTable(MOVEMENTS_TABLE)
   await queryInterface.dropTable(USER_TABLE)
   await queryInterface.dropTable(PRODUCTS_TABLE)
   await queryInterface.dropTable(CATEGORIES_TABLE)
   await queryInterface.dropTable(ROL_TABLE)
  }
};
