const fs = require("fs");

//create read stream from input.txt
const readStream = fs.createReadStream('input.txt');

let data = '';

//handle stream events
readStream.on('data', function(chunk) {
    data += chunk;
});

readStream.on('end',function() {
    console.log(data);
});

readStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("Finish reading.");
