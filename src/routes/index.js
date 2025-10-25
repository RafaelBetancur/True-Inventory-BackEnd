const categoriesRouter = require('./categories.routes'); 
const movementsRouter = require('./movements.routes');
const rolesRouter = require('./roles.routes');

function routerApi(app) {
  app.use('/categories', categoriesRouter);
  app.use('/movements', movementsRouter);
  app.use('/roles', rolesRouter);
}

module.exports = routerApi;
