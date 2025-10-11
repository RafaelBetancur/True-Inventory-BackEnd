import config from './config/config.js';
import express from 'express';

const app = express();

app.listen(config.port, () => {
    console.log(`Servidor en el puerto ${config.port}`);
});