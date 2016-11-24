var fs = require('fs');
var path = require('path');

function filterByExt(directoryPath, filter, callback) {
  var filteredFiles = []
  fs.readdir(directoryPath, function filterCallbacl(err, data) {
    if (err) {
      callback(err);
    } else {
      data.forEach(function extCheck(file) {
        var extname = path.extname(file);
        if(extname == '.' + filter) {
          filteredFiles.push(file);
        }
      });
      callback(null, filteredFiles);
    }
  });
}

module.exports = filterByExt;
