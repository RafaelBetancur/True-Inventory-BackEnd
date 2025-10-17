import { config } from './config/config.js'
import express from 'express';

const app = express();

async function startServer() {
  try {
    app.listen(config.port, () => {
      console.log(`Servidor en el puerto ${config.port}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

startServer();

