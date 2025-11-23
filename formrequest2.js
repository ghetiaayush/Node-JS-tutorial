const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
  // Serve the HTML form for GET /
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('html/form.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // Handle form POST submission
  if (req.method === 'POST' && req.url === '/submit') {
    const dataSet = [];
    req.on('data', chunk => dataSet.push(chunk));

    req.on('end', () => {
      const rawData = Buffer.concat(dataSet).toString();
      const readableData = querystring.parse(rawData);

      // Log parsed data to console
      console.log('Parsed form data:', readableData);

      // Respond with a small HTML showing submitted values
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Form submitted successfully!</h1>');
      res.write('<p>Parsed form data:</p>');
      res.write('<pre>' + JSON.stringify(readableData, null, 2) + '</pre>');
      res.end();
    });

    // If there's an error receiving data
    req.on('error', (err) => {
      console.error('Request error:', err);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad Request');
    });

    return;
  }

  // Fallback for other routes
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');

}).listen(3200, () => console.log('Server listening on http://localhost:3200'));
