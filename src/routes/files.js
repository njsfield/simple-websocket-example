const fs = require('fs');
const path = require('path');

// File requests
module.exports = (request, response, url) => {
  fs.readFile(path.join(__dirname, '../../public', url), 'utf8', function (err, file) {
    if (err) throw err;
    var ext = path.extname(url).slice(1);
    response.writeHead(200, {'content-type': 'text/' + ext});
    response.end(file);
  });
};
