const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
    "/",
    express.static(path.join(__dirname, `dist`), {
      maxAge: 31557600000,
    })
  );

app.use('/api', createProxyMiddleware({ target: process.env.URL || 'http://127.0.0.1:3000', hostRewrite: true }));

app.route("/*").get((_req, res) => {
    res.sendFile(`/dist/index.html`, {
      root: path.normalize(`${__dirname}`),
    });
  });
app.listen(6000);