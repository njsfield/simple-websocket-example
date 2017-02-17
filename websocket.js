// Websocket
const server = require('./index');
const io = require('socket.io')(server);
const log = (msg) => process.stdout.write(`${msg}\n`);

//
io.on('connection', (ws) => {
  log('A new socket has been connected');
  ws.on('private message', (message) => {
    io.emit('global message', message);
  });
});

module.exports = io;
