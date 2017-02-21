// Import Room
const myRoom = require('../myroom.js');

// Comms
const servercomms = (io, ws, msg) => {
  // Parse message
  const parsed = JSON.parse(msg);

  const from = parsed.from;
  const app = parsed.app;
  const method = parsed.method;

  const route = `${app}.${method}`;

  switch (route) {
    case ('CHATROOM.REGISTER') : {
      myRoom.addEndpoint(from);
      myRoom.updateEndpointCommsID(from, ws.id);
      io.emit('message', msg);
      break;
    }
    case ('CHATROOM.MESSAGE') : {
      io.emit('message', msg);
      break;
    }
    case ('CHATROOM.DISCONNECT') : {
      io.emit('message', msg);
      break;
    }
  }
};

// Main router
module.exports = (io) => {
  io.on('connection', (ws) => {
    ws.on('message', (msg) => {
      servercomms(io, ws, msg);
    });
    ws.on('disconnect', () => {
      servercomms(io, ws, myRoom.disconnectMsg(ws.id));
      myRoom.removeEndpoint(ws.id);
    });
  });
};
