var http = require('http');
var bl = require('bl');

var urlArray = process.argv.splice(2);
var results = [];
var count = 0;

function printResults() {
    for (var i=0; i<urlArray.length; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(urlArray[index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) return console.error(err);
            
            results[index] = data.toString();
            count++;
            
            if (count === urlArray.length) {
                printResults();
            }
        }))
    })
}

for (var i=0; i<urlArray.length; i++) {
    httpGet(i);
}

