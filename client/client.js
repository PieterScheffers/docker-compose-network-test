const net = require('net');

const client = new net.Socket();

const { host } = process.env;
const port = 1337;

client.connect(port, host, function() {
  console.log('Connected');
  client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
  console.log('Received: ' + data);
    setTimeout(function() {
      client.write('Hello again! Love, Client.');
    }, 2000);
});

client.on('close', function() {
  console.log('Connection closed');
});

process.on('uncaughtexception', err => console.error(err));
