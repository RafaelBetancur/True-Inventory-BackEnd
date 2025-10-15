import {Sequelize} from 'sequelize';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_DIALECT } from './env.config.js';

const sequelize = new Sequelize( DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: false
});

export default sequelize;