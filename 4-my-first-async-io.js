var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
    
    if (err) return console.error(err);
    
    var lines = data.toString().split(/\r|\n/).length -1;
    console.log(lines);
})