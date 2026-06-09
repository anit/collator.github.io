const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT  = 3000;
const TYPES = {
  '.html':     'text/html',
  '.css':      'text/css',
  '.js':       'text/javascript',
  '.svg':      'image/svg+xml',
  '.png':      'image/png',
  '.jpg':      'image/jpeg',
  '.ico':      'image/x-icon',
  '.gif':      'image/gif',
  '.mp4':      'video/mp4',
  '.webm':     'video/webm',
  '.webmanifest': 'application/manifest+json',
};

http.createServer((req, res) => {
  let file = path.join(__dirname, req.url.split('?')[0]);
  if (!path.extname(file)) file = path.join(file, 'index.html');

  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(`  404  ${req.url}`);
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const type = TYPES[path.extname(file)] || 'text/plain';
    console.log(`  200  ${req.url}`);
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}).listen(PORT, () => console.log(`\nServing at http://localhost:${PORT}\n`));
