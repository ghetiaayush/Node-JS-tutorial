//const arg = process.argv;
//console.log("-------", arg);

//collecting command line inputs which is array  formate
//console.log("-------", arg[1]);

// Use Case: Dynamic Port
const http = require("http");
const arg = process.argv;
const port = arg[2];

http
  .createServer((req, resp) => {
    resp.write("test input from cmd");
    resp.end();
  }).listen(port);

  console.log(`server is running on port number ${port}`);

  // command to run above use case in terminal : node command-line-input.js 5000 and go to google corome and hit url : localhost:5000