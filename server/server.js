const net = require('net');

const port = 1337;

const server = net.createServer(function(socket) {
  socket.write('Echo server\r\n');

  socket.on('data', function(data) {
    console.log('Received: ' + data);
    setTimeout(function() {
      socket.write('Bye bye from the server!');
    }, 2000);
  });
});

server.listen(port);
