const categoriesRouter = require('./categories/index'); 

function routerApi(app) {
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
