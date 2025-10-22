const { config } = require('./config/config');
const express = require('express');
const categoriesRouter = require('./routes/categories/index'); 
const routerApi = require('./routes');

const app = express();
app.use(express.json());

routerApi(app)

app.listen(config.port, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${config.port}`);
});

module.exports = app;
