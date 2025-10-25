'use strict';
const { CATEGORIES_TABLE } = require('../models/categories.model');
const { ROL_TABLE } = require('../models/rol.model');
const { USER_TABLE } = require('../models/users.model');
const { PRODUCTS_TABLE } = require('../models/products.model');
const { MOVEMENTS_TABLE } = require('../models/movements.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(CATEGORIES_TABLE,[
      {
        "name":"Estuches",
        "description":"Protectores para los celulares"
      },
      {
        "name": "Auriculares",
        "description": "Audífonos inalámbricos y con cable para todo tipo de dispositivos"
      },
      {
        "name": "Cargadores",
        "description": "Cargadores rápidos, inalámbricos y adaptadores universales"
      },
      {
        "name": "Smartwatches",
        "description": "Relojes inteligentes con múltiples funciones de salud y conectividad"
      },
      {
        "name": "Tablets",
        "description": "Dispositivos portátiles ideales para trabajo, estudio y entretenimiento"
      },
      {
        "name": "Laptops",
        "description": "Computadores portátiles de diversas marcas y especificaciones"
      },
      {
        "name": "Monitores",
        "description": "Pantallas de alta resolución para trabajo, diseño o gaming"
      },
      {
        "name": "Teclados",
        "description": "Teclados mecánicos, inalámbricos y ergonómicos"
      },
      {
        "name": "Mouse",
        "description": "Ratones ópticos, inalámbricos y gamer de alto rendimiento"
      },
    ])

    await queryInterface.bulkInsert(PRODUCTS_TABLE, [
      {
        "name":"ipdos",
        "description":"audifonos blancos de apple",
        "stock":12,
        "category_id":2,
        "image":"",
        "price":230000
      },
      {
        "name":"Cargador tipo C",
        "description":"Cargador blanco 120w 2.5m",
        "stock":34,
        "category_id":3,
        "image":"",
        "price":55000
      }
    ])

    await queryInterface.bulkInsert(ROL_TABLE, [
      {
        "type":"cliente"
      },
      {
        "type":"administrador"
      }
    ])

    await queryInterface.bulkInsert(USER_TABLE, [
      {
        "email":"jacoblm49@gmail.com",
        "name":"Jacob López",
        "password":"jacob1212",
        "rol_id":2
      },
      {
        "email": "maria.garcia@gmail.com",
        "name": "María García",
        "password": "maria123",
        "rol_id": 1
      },
      {
        "email": "carlos.torres@gmail.com",
        "name": "Carlos Torres",
        "password": "carlos456",
        "rol_id": 1
      },
      {
        "email": "admin.tech@gmail.com",
        "name": "Admin Tech",
        "password": "admin2025",
        "rol_id": 2
      }
    ])

    await queryInterface.bulkInsert(MOVEMENTS_TABLE, [
      {
        "quantity":23,
        "description":"Ingreso de nuevos ipods",
        "date":"25/10/2025",
        "product_id":1,
        "user_id":1
      }
    ])
  },
    

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CATEGORIES_TABLE, null, {});
    await queryInterface.bulkDelete(PRODUCTS_TABLE, null, {});
    await queryInterface.bulkDelete(ROL_TABLE, null, {});
    await queryInterface.bulkDelete(USER_TABLE, null, {});
    await queryInterface.bulkDelete(MOVEMENTS_TABLE, null, {});
  }
};
