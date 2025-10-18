const { config } = require('./config/config')
const express = require('express');

const app = express();

app.listen(config.port, () => {
  console.log(`Servidor en el puerto ${config.port}`);
});


module.exports = app