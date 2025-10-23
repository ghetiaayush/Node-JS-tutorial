const http = require("http");
//created a server object:
// http.createServer().listen(4800);

// Understanding Request and Response Parameters 
http.createServer((req, resp) => {
resp.write("<h1>Hello, welcome to nodejs tutorial</h1>");
resp.end("Hello"); // Ends the response
}).listen(4800);