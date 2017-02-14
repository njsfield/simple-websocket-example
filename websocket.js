// Websocket
const WebSocket = require('ws');
const log = (msg) => process.stdout.write(`${msg}\n`);
const port = 8000;

const wss = new WebSocket.Server({ port });

// Broadcast to all.
wss.broadcast = function broadcast (data) {
  wss.clients.forEach(function each (client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('A new socket has been connected');
  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});

module.exports = wss;

log(`Socket open on port: ${port}`);
