const categoriesRouter = require('./categories.routes'); 

function routerApi(app) {
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
