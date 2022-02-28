'use strict';
const express = require('express');
const PORT = 3000;
const HOST = 'localhost';

const app = express();
app.get('/', (_, res) => {
  res.send({
    message: "Hello World NodeJs",
    version: process.env.npm_package_version,
  });
});
const server = app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});