const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: '13.124.13.37:5000',
            changeOrigin: true,
        })
    );
};