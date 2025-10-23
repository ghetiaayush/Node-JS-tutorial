//app testing 
console.log(20+40*59);

//Function Example
function fruit(item) {console.log("Fruit name is " + item);}
fruit("apple");   

//Variable Example
var a = 10;
var b = 20;
console.log(a + b);

//File System Example
var fs = require("fs"); // Import file system module
fs.writeFileSync("demo.txt", "welcome to nodejs file system"); // Create and write to a file

//REPL (Read Eval Print Loop)
//Just type node in terminal to enter REPL mode 
//.exit is used to exit REPL mode