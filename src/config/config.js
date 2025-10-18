//cargamos las variables de entorno declaradas en el archivo .env, especificando la ubicación del archivo partiendo desde la raíz del proyecto, solo si está en un entorno de desarrollo
const dotenv= require('dotenv')

if ( process.env.NODE_ENV !== 'production' ) {
    dotenv.config({ path: './src/config/.env'});
}

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
}

config.dbUrl = process.env.DATABASE_URL || `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {config};