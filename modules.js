const fs = require("fs");
fs.writeFileSync("dummy.txt", "trying with modules"); 

const os = require("os"); // import os module
console.log(os.platform()); // Print the platform of the OS
console.log(os.hostname()); // Print the hostname of the OS
