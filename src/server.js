const http = require('http');

// Router
const router = require('./routes');

// Export Server
module.exports = http.createServer(router);
