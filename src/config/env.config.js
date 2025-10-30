const { Sequelize } = require('sequelize')
import dotenv from 'dotenv';

dotenv.config();

export const  {
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_DIALECT,
    DB_PORT,
    JWT_SECRET
} = process.env;

if ( process.env.NODE_ENV !== 'production' ) {
    dotenv.config({ path: '.src/config/.env'});
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: false
});

module.exports = { sequelize }