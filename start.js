const server = require('./src/server.js');
const port = 4000;
const log = (msg) => process.stdout.write(`${msg}\n`);

// Start REST server
const liveserver = server.listen(port, () => {
  log(`Server live at http://localhost:${port}/`);
});

// Start Websocket server from liveserver
const io = require('socket.io')(liveserver);
// Connect
io.on('connection', (ws) => {
  // Replace with comms
  log('A new socket has been connected');
  ws.on('private message', (message) => {
    io.emit('global message', message);
  });
});

module.exports = io;
