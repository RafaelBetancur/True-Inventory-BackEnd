import {PORT} from './config/env.config.js';
import express from 'express';

const app = express();

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});