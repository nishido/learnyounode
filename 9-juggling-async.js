var http = require('http');
var bl = require('bl');

var urlArray = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];
var count = 0;

function printResults() {
    for (var i=0; i<3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(urlArray[index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) return console.error(err);
            
            results[index] = data.toString();
            count++;
            
            if (count === 3) {
                printResults();
            }
        }))
    })
}

for (var i=0; i<3; i++) {
    httpGet(i);
}

