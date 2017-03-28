var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method !== 'GET') {
        return res.end('send me a GET\n');
    }
    
    var parsedUrl = url.parse(req.url, true);
    var pathname = parsedUrl.pathname;
    var date = new Date(parsedUrl.query['iso']);
    var time;
    
    if (pathname === '/api/parsetime') {
        time = JSON.stringify({
            'hour': date.getHours(), 'minute': date.getMinutes(),
            'second': date.getSeconds()
        })
    }
    else if (pathname === '/api/unixtime') {
        time = JSON.stringify({
            'unixtime': date.getTime()
        })
    }
    else {
        res.end('404 - something went wrong');
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(time);
});

server.listen(process.argv[2]);