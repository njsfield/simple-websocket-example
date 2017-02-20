const Room = require('./src/room.js');

// Set Up Room
const myRoomName = 'mycoolroom';
const myRoom = new Room(myRoomName);

// Add disconnect msg function
myRoom.disconnectMsg = (id) => {
  const from = myRoom.getEndpointNameFromCommsID(id);
  return JSON.stringify({
    from: from,
    app: 'CHATROOM',
    method: 'DISCONNECT',
    params: 'LEFT THE CHATROOM'
  });
};

module.exports = myRoom;
