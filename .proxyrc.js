

const { createProxyMiddleware } = require("http-proxy-middleware");

const target = 'http://localhost:7080/';

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/io", {
      target,
      ws: true,
    })
  );

  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};
