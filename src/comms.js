// Import Room
const myRoom = require('../myroom.js');

// Comms
module.exports = (io, ws, msg) => {
  // Parse message
  const parsed = JSON.parse(msg);

  const from = parsed.from;
  const app = parsed.app;
  const method = parsed.method;

  const route = `${app}.${method}`;

  switch (route) {
    case ('CLIENT.REGISTER') : {
      // Update first
      myRoom.updateEndpointCommsID(from, ws.id);
      // Send register message back to sender
      io.emit('message', msg);
      break;
    }
    case ('CHATROOM.MESSAGE') : {
      // Send message to everyone including sender
      io.emit('message', msg);
      break;
    }
  }
};
