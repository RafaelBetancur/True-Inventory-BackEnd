const { config } = require('./config/config');
const express = require('express');
const routerApi = require('./routes');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));/*Habilito el CORS*/
routerApi(app)

app.listen(config.port, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${config.port}`);
});

module.exports = app;