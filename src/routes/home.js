const fs = require('fs');
const path = require('path');
const log = (msg) => process.stdout.write(`${msg}\n`);

// Home request
module.exports = (request, response) => {
  fs.readFile(path.join(__dirname, '../../views/index.html'), (err, data) => {
    if (err) log('Error Serving Home:' + err);
    else {
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(data);
      response.end();
    }
  });
};
