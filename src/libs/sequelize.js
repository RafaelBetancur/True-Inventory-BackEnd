const { Sequelize } = require("sequelize");
const setupModels = require("../database/models");
const {config } = require('../config/config')

const sequelize = new Sequelize(config.dbUrl, {
    dialect: 'postgres',
    logging: false
})

setupModels(sequelize)

module.exports = sequelize;