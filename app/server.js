const http = require('http');
const fs = require('fs');
const path = require('path');

const s = http.createServer((request, response) => {
  fs.readFile(path.join(__dirname, './index.html'), (err, content) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(content, 'utf-8');
  });
});

module.exports = {
  start(port = 9000) {
    s.listen(port);
  },

  stop() {
    s.close();
  }
};
