const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 4000;
const log = (msg) => process.stdout.write(`${msg}\n`);

const header = { 'content-type': 'text/html' };

// Export Server
module.exports = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, header);
    res.end(html);
  }
}).listen(port, () => {
  log(`Server live at http://localhost:${port}/`);
});

// // websocket.js
require('./websocket');
