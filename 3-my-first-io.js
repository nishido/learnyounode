var fs = require('fs');

var fileArray = fs.readFileSync(process.argv[2]).toString().split(/\r|\n/);

console.log(fileArray.length - 1);