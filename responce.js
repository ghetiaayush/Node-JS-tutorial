// const http = require("http");

// http
//   .createServer((req, resp) => {
//     resp.setHeader("Content-Type", "text/html"); // Tell browser the response is HTML
//     resp.write("<h1>Hello welcome to nodejs tutorials</h1>");
//     resp.end(); // End the response
//   })
//   .listen("4800");

const http = require("http");

const age = 29;

http
  .createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");

    resp.write(`
      <html>
        <head>
          <title>Code Step by Step</title>
        </head>
        <body>
          <h1>Hello Anil Sidhu</h1>
          <h2>Age: ${age}  ${Date()}</h2>
        </body>
      </html>
    `);

    resp.end();
    //process.exit();
  })
  .listen(4800);