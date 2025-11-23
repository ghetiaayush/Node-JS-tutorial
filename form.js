const http = require('http');

http.createServer(
   (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (req.url === '/') {
         res.write(`
            <form method="POST" action="/submit">
               <input type="text" name="name" placeholder="enter name" />
               <input type="text" name="password" placeholder="enter password" />
               <button type="submit">Submit</button>
            </form>`);
      res.end();
      }
      else if (req.url === '/submit') {
         res.write('Form submitted successfully!');
         res.end();
      }
   }
).listen(3200);