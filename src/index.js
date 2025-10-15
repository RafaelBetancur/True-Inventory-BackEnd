import sequelize from './config/database.js';
import {PORT} from './config/env.config.js';
import express from 'express';

const app = express();

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a PostgreSQL establecida correctamente.');

    app.listen(PORT, () => {
      console.log(`Servidor en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

startServer();

