var http = require('http');
let router = require('./routes');
http.createServer(router.handleRequest).listen(8080);