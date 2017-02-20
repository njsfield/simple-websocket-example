const server = require('./src/server');
const socketserver = require('./src/socketserver');
const io = require('socket.io');
const comms = require('./src/servercomms');
const port = 4000;
const log = (msg) => process.stdout.write(`${msg}\n`);

// Start REST server
const liveserver = server.listen(port, () => {
  log(`Server live at http://localhost:${port}/`);
});

// Start Websocket server from liveserver

const livesocketserver = socketserver(io(liveserver));
