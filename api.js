const http = require('node:http');
const PORT = 8000;

const server = http.createServer({ keepAliveTimeout: 60000 }, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

console.log(`[*] Server listening on ${PORT}...`);

server.listen(PORT);
