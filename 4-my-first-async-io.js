var fs = require('fs');

var file_path = process.argv[2];

var contents = fs.readFile(file_path, 'utf8', callback);

function callback(err, data) {
  if (!err) {
    var lines = data.split('\n').length - 1;
    console.log(lines);
  } else {
    console.error(err);
  }
}
