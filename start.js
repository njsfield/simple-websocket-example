const server = require('./src/server.js');
const comms = require('./src/comms');
const port = 4000;
const log = (msg) => process.stdout.write(`${msg}\n`);

// Start REST server
const liveserver = server.listen(port, () => {
  log(`Server live at http://localhost:${port}/`);
});

// Start Websocket server from liveserver
const io = require('socket.io')(liveserver);
io.on('connection', (ws) => {
  ws.on('message', (msg) => {
    comms(io, ws, msg);
  });
});
