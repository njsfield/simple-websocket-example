const fs = require('fs');
const path = require('path');
const log = (msg) => process.stdout.write(`${msg}\n`);
const myRoom = require('../../myroom.js');
const randomString = require('../helpers/randomstring');

// Home request
module.exports = (request, response) => {
  fs.readFile(path.join(__dirname, '../../views/index.html'), (err, data) => {
    if (err) log('Error Serving Home:' + err);
    else {
      // get roomname, make endpointId
      const roomName = myRoom.getRoomName();
      const endpointId = randomString();
      // Add endpoint
      myRoom.addEndpoint(endpointId);

      // Inject data
      data = data.toString();
      data = data.replace(/{{roomname}}/g, roomName);
      data = data.replace(/{{endpointid}}/g, endpointId);

      // Respond
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(data);
      response.end();
    }
  });
};
