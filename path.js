const { log } = require('console');
const path = require('path');
const file = "text/demo.txt";

console.log(path.extname(file)); // Output: .txt
console.log(path.dirname(file)); // Output: text
console.log(path.basename(file)); // Output: peter.txt
console.log(path.resolve("text", "demo.text")); // Output: absolute path to text/demo.text
console.log(path.isAbsolute(file)); // Output: false (if the path is not absolute)
console.log(path.join("text", "demo.text")); // Output: text/demo.text
console.log(path.parse(file));
console.log();

// This are the global constants in Node.js
console.log("global constants");
console.log();
console.log(__dirname); // Output: current directory path
console.log(__filename); // Output: current file path
console.log();
