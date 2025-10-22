const { config } = require('./config/config')
const express = require('express');
const userRoutes = require('./routes/user.routes')
const { PORT } = require('./src/config/env.config');

const app = express();
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Servidor en el puerto ${config.port}`);
});

//Rutas de usuario
app.use('/users', userRoutes);

module.exports = app