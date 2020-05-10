const fs = require("fs");

//create read stream
const readStream = fs.createReadStream('input.txt');

//create write stream
const writeStream = fs.createWriteStream('4_output.txt');

// Pipe reads input.txt data and write to 4_output.txt
readStream.pipe(writeStream);

console.log("Finish piping.");
