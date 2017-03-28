var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(process.argv[3]);
    
    readStream.on('error', function(err) {
        res.end(err);
    });
    readStream.on('open', function() {
        readStream.pipe(res);
    });
});

server.listen(process.argv[2]);