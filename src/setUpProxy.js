const proxy = require('http-proxy-middleware');
const morgan = require('morgan');

module.exports = (app) => {
  app.use(
    '/api',
    proxy({
      target: `http://localhost:${process.env.PORT || 8000}`,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );

  app.use(morgan('combined'));
};
