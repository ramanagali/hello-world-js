'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '127.0.0.0';

const app = express();
app.get('/', (_, res) => {
  res.send({
    message: "Hello World NodeJs!",
  });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});