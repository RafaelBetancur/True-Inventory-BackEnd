import dotenv from 'dotenv'
import path from 'path'

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
} = process.env

if ( process.env.NODE_ENV !== 'production' ) {
    dotenv.config({ path: '.src/config/.env'})
}
