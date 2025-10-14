import dotenv from 'dotenv';

dotenv.config();

export const  {
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;

if ( process.env.NODE_ENV !== 'production' ) {
    dotenv.config({ path: '.src/config/.env'});
}
