const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

const options = {
  root: path.join(__dirname) + '/pages/'
}

app.get('/', (req, res) => {
  res.sendFile('index.html', options, (err) => {
    if (err) {
      console.error(err);
    }
  });
})

app.get('/about', (req, res) => {
  res.sendFile('about.html', options, (err) => {
    if (err) {
      console.error(err);
    }
  });
})

app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', options, (err) => {
    if (err) {
      console.error(err);
    }
  });
})

app.get('*', (req, res) => {
  res.sendFile('404.html', options, (err) => {
    if (err) {
      console.error(err);
    }
  });
})

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error');
  }

  console.log(`Server listening on port ${PORT}`)
})

// const dir = [];

// fs.readdir('./pages', (err, files) => {
//   files.forEach(file => {
//     dir.push('./pages/' + file);
//   });
//   console.log(dir);
// })

// http.createServer((req, res) => {
//   const path = url.parse(req.url, true);
//   const filename = path.path === '/' ? './pages/index.html' : './pages' + path.pathname + '.html';

//   console.log(filename);

//   if (dir.includes(filename)) {
//     fs.readFile(filename, (err, data) => {
//       if (err) {
//         console.error(err);
//       }
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       return res.end();
//     })
//   } else {
//     fs.readFile('./pages/404.html', (err, data) => {
//       if (err) {
//         console.error(err);
//       }
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       return res.end();
//     })
//   }

// }).listen(8080);