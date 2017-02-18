// Import Room
const myRoom = require('../myroom.js');

// Servers responsibility to notify parties if socket disconnects
const disconnectmsg = (id) => {
  const from = myRoom.getEndpointNameFromCommsID(id);
  return JSON.stringify({
    from: from,
    app: 'CHATROOM',
    method: 'DISCONNECT',
    params: 'LEFT THE CHATROOM'
  });
};

// Comms
module.exports = (io, ws, msg) => {
  if (!msg) msg = disconnectmsg(ws.id);
  // Parse message
  const parsed = JSON.parse(msg);

  const from = parsed.from;
  const app = parsed.app;
  const method = parsed.method;

  const route = `${app}.${method}`;

  switch (route) {
    case ('CHATROOM.REGISTER') : {
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
