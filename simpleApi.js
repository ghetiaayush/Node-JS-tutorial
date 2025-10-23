const http = require("http");
const userData = [
{
name: "Anil",
age: 30,
email: "anil@test.com",
},
{
name: "sam",
age: 20,
email: "sam@test.com",
},
{
name: "peter",
age: 30,
email: "peter@test.com",
},
{
        name: "Ayush",
        age: 30,
        email: "ayush@test.com"
      },
];

http.createServer(
   (req, resp) => {

      resp.setHeader("Content-Type", "application/json");
      resp.write(JSON.stringify(userData));
      resp.end();
   }
).listen(8000);