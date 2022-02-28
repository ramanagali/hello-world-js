'use strict';

const http = require('http');
const handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('<h1> Hello Kubernetes! - its v1 </h1>');
};
const www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);

module.exports = www;
