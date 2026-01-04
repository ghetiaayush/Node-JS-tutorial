const fs = require('fs');
const operation = process.argv[2];
//console.log(process.argv[2]);
if (operation === "Write") {
  const name = process.argv[3];
  const content = process.argv[4];
  fs.writeFileSync(`files/${name}.txt`, content);
  console.log("File Created");
}else if (operation === "Read") {
  const name = process.argv[3];
  const data = fs.readFileSync(`files/${name}.txt`, 'utf8');
  console.log(data);
}else if (operation === "update") {
  const name = process.argv[3];
  const content = process.argv[4];
  fs.appendFileSync(`files/${name}.txt`, content);
  console.log("File Updated");
}else if (operation === "delete") {
  const name = process.argv[3];
  fs.unlinkSync(`files/${name}.txt`);
  console.log("File Deleted");
}else {
  console.log("Invalid Operation");
}

/**
 * note:-
 * process.argv[] gives command-line input.
 
 * use following command to create a file using terminal
 * nodemon fscrudTerminal.js Write fileName "your content"

 */