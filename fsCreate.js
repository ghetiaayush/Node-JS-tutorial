const fs = require('fs');

// code to create a new file and write content to it
fs.writeFileSync("files/demo.txt", "welcome to nodejs file system module");

/*

note:-
 writeFileSync() creates files. If file already exists, it will overwrite.

*/