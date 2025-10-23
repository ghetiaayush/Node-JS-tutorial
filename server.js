const http = require("http");
//created a server object:
// http.createServer().listen(4800);

// Understanding Request and Response Parameters 
http.createServer((req, resp) => {
resp.write("<h1>Hello, welcome to nodejs tutorial</h1>");
resp.end("Hello from step by step coding"); // Ends the response
}).listen(4800);

//multiple server example
http.createServer((req, resp) => {
resp.write("<h2>Hello, welcome to nodejs tutorial</h2>");
resp.end("Hello"); // Ends the response
}).listen(8000);