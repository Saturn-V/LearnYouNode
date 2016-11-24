var myModule = require('./6-make-it-modular-module');
var file_path = process.argv[2];
var ext = process.argv[3];

myModule(file_path, ext, callback);

function callback(err, data) {
  if (!err) {
    data.forEach(function printFiles(file) {
      console.log(file);
    });
  } else {
    console.error('Error: ' + data);
  }
}
