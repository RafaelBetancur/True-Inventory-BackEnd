const categoriesRouter = require('./categories.routes'); 
const movementsRouter = require('./movements.routes');
const rolesRouter = require('./roles.routes');
const productsRouter=require("./products.routes")

function routerApi(app) {
  app.use('/categories', categoriesRouter);
  app.use('/movements', movementsRouter);
  app.use('/products', productsRouter);
  app.use('/roles', rolesRouter);
}

module.exports = routerApi;
