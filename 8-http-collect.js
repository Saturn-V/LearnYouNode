var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function httpCallback(response) {
  response.setEncoding('utf8').pipe(bl(function blCallback(err, data) {
    var stringData = data.toString();
    console.log(stringData.length);
    console.log(stringData);
  }))
});
