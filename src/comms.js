// Import Room
const myRoom = require('../myroom.js');

// Build Message to package
const packageMessage = (roomId, from, to, app, method, params) => {
  return JSON.stringify({
    roomId,
    from,
    to,
    app,
    method,
    params
  });
};

// Comms
module.exports = (io, ws, msg) => {
  // Parse message
  msg = JSON.parse(msg);
  const roomId = myRoom.getRoomName(msg.from);
  const from = msg.from;
  const to = msg.to;
  const app = msg.app;
  const method = msg.method;
  const params = msg.params;

  const route = `${app}.${method}`;

  switch (route) {
    case ('CLIENT.REGISTER') : {
      // Update first
      myRoom.updateEndpointCommsID(msg.from, ws.id);
      // Send register message back to sender
      io.emit('message', packageMessage(roomId, from, to, app, method, from + ' JOINED ROOM'));
      break;
    }
    case ('CHATROOM.MESSAGE') : {
      // Send message to everyone including sender
      io.emit('message', packageMessage(roomId, from, to, app, method, from + ':' + params));
      break;
    }
  }
};
