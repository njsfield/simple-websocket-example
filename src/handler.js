const handler = module.exports = {};
const fs = require('fs');
const path = require('path');

// Home
handler.home = function (request, response) {
  fs.readFile(path.join(__dirname, '../public/index.html'), function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write(data);
    response.end();
  });
};

// File requests
handler.files = function (request, response, url) {
  fs.readFile(path.join(__dirname, '../public', url), 'utf8', function (err, file) {
    if (err) throw err;
    var ext = path.extname(url).slice(1);
    response.writeHead(200, {'content-type': 'text/' + ext});
    response.end(file);
  });
};

// 404
handler.notFound = function (request, response) {
  response.writeHead(404, {'Content-type': 'text/html'});
  response.end('<h1>Resource not found</h1>');
};
