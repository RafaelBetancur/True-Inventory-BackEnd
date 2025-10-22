const { Sequelize } = require('sequelize')
const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_DIALECT,
    DB_PORT
} = require('./env.config')

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: false
});

module.exports = { sequelize }