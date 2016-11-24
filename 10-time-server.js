var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function listener(socket) {
  var data = strftime('%Y-%m-%d %H:%M\n', new Date());
  // console.log(data);
  socket.end(data);
});

server.listen(process.argv[2]);
