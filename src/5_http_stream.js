const fs = require('fs');

//create http server
const server = require('http').createServer();

//on receive request, pipe data as response stream
server.on('request', (req, res) => {
    const src = fs.createReadStream('./input.txt');
    src.pipe(res);
});

//start http server listening
server.listen(8000);
