const fs = require('fs');

const data = fs.readFileSync("files/demo.txt", "utf-8");
console.log(data);