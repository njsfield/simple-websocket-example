const fs = require('fs');
const path = require('path');
const log = (msg) => process.stdout.write(`${msg}\n`);
const myRoom = require('../../myroom.js');
const randomString = 'ghjksdg';

// Home request
module.exports = (request, response) => {
  fs.readFile(path.join(__dirname, '../../views/index.html'), (err, data) => {
    if (err) log('Error Serving Home:' + err);
    else {
      const roomName = myRoom.getRoomName();
      // Set Up Endpoint & Inject
      myRoom.addEndpoint(randomString);
      data.replace(/{{roomname}}/, roomName);
      data.replace(/{{endpointid}}/, randomString);
      // Respond
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(data);
      response.end();
    }
  });
};
