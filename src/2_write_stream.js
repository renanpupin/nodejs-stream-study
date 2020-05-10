const fs = require("fs");

//create write stream
const writeStream = fs.createWriteStream('2_output.txt');

const data = 'test write stream';

// write in the stream
writeStream.write(data);

//finish writing
writeStream.end();

//handle events
writeStream.on('finish', function() {
    console.log("Write completed.");
});

writeStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("Finish writing.");
