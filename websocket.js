// Websocket
const WebSocket = require('ws');
const log = (msg) => process.stdout.write(`${msg}\n`);
const port = 8000;

const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    log(`Received: ${message}, Sending: ${message}`);
    ws.send(message);
  });
});

module.exports = wss;

log(`Socket open on port: ${port}`);
