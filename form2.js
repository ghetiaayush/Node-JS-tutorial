const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
 fs.readFile('html/form.html','utf-8',(err, data) => {
      if (err) {
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         // res.write('Internal Server Error');
         res.end('Internal Server Error');
         return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (req.url === '/') {
         res.write(data);
      }
      else if (req.url === '/submit') {
         res.write('Form submitted successfully!');
      }

      res.end();
 });
}).listen(3200);