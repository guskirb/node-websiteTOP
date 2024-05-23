const http = require('http');
const url = require('url');
const fs = require('fs');

const dir = [];

fs.readdir('./pages', (err, files) => {
  files.forEach(file => {
    dir.push('./pages/' + file);
  });
})

http.createServer((req, res) => {
  const path = url.parse(req.url, true);
  const filename = path.path === '/' ? './pages/index.html' : './pages' + path.pathname + '.html';

  if (dir.includes(filename)) {
    fs.readFile(filename, (err, data) => {
      if (err) {
        console.error(err);
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    })
  } else {
    fs.readFile('./pages/404.html', (err, data) => {
      if (err) {
        console.error(err);
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    })
  }

}).listen(8080);
