import acreageRoute from './acreage.js';
import authRoute from './auth.js';
import cateRoute from './category.js';
import insertRoute from './insert.js';
import postRoute from './post.js';
import priceRoute from './price.js';

const initRoutes = (app) => {
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/insert', insertRoute);
  app.use('/api/v1/categories', cateRoute);
  app.use('/api/v1/posts', postRoute);
  app.use('/api/v1/price', priceRoute);
  app.use('/api/v1/acreage', acreageRoute);

  return app.use('/', (req, res) => {
    res.send('server is running ...');
  });
};

export default initRoutes;
