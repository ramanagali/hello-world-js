'use strict';
const express = require('express');
const PORT = 3000;

const app = express();
app.get('/', (_, res) => {
  res.send({
    app: process.env.npm_package_name,
    version: process.env.npm_package_version,
    message: "Hello World NodeJs",
    author: process.env.npm_package_author_name
  });
});
const server = app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});