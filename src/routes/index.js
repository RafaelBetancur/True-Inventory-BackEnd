const categoriesRouter = require('./categories.routes'); 
const movementsRouter = require('./movements.routes');

function routerApi(app) {
  app.use('/categories', categoriesRouter);
  app.use('/movements', movementsRouter);
}

module.exports = routerApi;
