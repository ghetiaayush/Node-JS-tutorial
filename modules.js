//Core Modules
const fs = require("fs");
fs.writeFileSync("dummy.txt", "trying with modules"); 

const os = require("os"); // import os module
console.log(os.platform()); // Print the platform of the OS
console.log(os.hostname()); // Print the hostname of the OS
//console.log(os.cpus()); // Print the CPU information of the OS

// Global Object
console.log(process.cwd());
console.log(process.pid);

//custom global object
const{log} = require("console");
log("This is a message using destructured console log");
