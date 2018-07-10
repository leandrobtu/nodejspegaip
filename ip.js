var ip = require('ip');

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Seu IP: ' + ip.address());
}).listen(8080);

console.log(ip.address());

console.log('Servidor Nodejs rodando em http://localhost:8080');
