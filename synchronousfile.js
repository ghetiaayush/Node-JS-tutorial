const http = require('http');
const fs = require('fs');
const querystring = require("querystring");

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
         let dataSet = [];
         req.on('data', chunk => {
            dataSet.push(chunk);
         })
         
         req.on("end", () => {
            let rawData = Buffer.concat(dataSet).toString();
            let readableData = querystring.parse(rawData);
            let dataString = "My name is " + readableData.name + " and my password is " + readableData.password;
            fs.writeFileSync("text/" + readableData.name + ".txt", dataString);
            console.log("File Created");
         });
         res.write('Form submitted successfully!');
      }

      res.end();
 });
}).listen(3200);