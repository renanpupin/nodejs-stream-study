const fs = require('fs');

//create read and write stream
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output2.txt');

//read data and write
readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});

//when finish reading, call end from the write stream
readableStream.on('end', () => {
    writableStream.end();
});
