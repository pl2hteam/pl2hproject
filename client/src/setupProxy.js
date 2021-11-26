const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://3.34.51.7:5000',
            changeOrigin: true,
        })
    );
};