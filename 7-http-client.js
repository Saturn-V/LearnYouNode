var http = require('http');

var url = process.argv[2];

http.get(url, function httpCallback(response) {
  response.setEncoding('utf8').on('data', function responseCallback(data) {
    console.log(data);
  });
});
