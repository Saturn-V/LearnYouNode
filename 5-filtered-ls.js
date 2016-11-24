var fs = require('fs');
var path = require('path');

var directory_path = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(directory_path, callback);

function callback(err, list) {
  if (!err) {
    list.forEach(function extCheck(file) {
      var extname = path.extname(file);
      if(extname == filter) {
        console.log(file);
      }
    })
  }
}
