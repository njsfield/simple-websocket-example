// Import Room
const myRoom = require('../myroom.js');
// Comms
module.exports = (io, ws, msg) => {
  if (!msg) msg = myRoom.disconnectMsg(ws.id);
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
