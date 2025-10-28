const categoriesRouter = require('./categories.routes'); 
const movementsRouter = require('./movements.routes');
const productsRouter=require("./products.routes")


function routerApi(app) {
  app.use('/categories', categoriesRouter);
  app.use('/movements', movementsRouter);
  app.use('/products', productsRouter);
}

module.exports = routerApi;
