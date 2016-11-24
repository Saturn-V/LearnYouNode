var fs = require('fs');

// Get the file path passed as an argument in the command line
var file_path = process.argv[2];

var contents = fs.readFileSync(file_path);

var lines = contents.toString().split('\n').length - 1;

console.log(lines);
