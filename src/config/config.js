import dotenv from 'dotenv';

if ( process.env.NODE_ENV !== 'production' ) {
    dotenv.config({ path: '.src/config/.env'});
}

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    isProd: process.env.DB_USER || 'production',
    uri: process.env.DB_URI || 'http://localhost:3000',

}

export default config;