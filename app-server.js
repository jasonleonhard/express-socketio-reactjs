// require libaries, variable to call later
var express = require('express');
var app = express();

// use/serve static files in folders listed
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// open port 3000 with express and notify user
// app.listen(3000);
var server = app.listen(3000);
// socket server created, listening on port 3000
var io = require('socket.io').listen(server);

// when socket connects the event listener/handler with callback function taking in port 3000
  // when new sockets connect log id
io.sockets.on('connection', function (socket) {
  console.log("Connected: %s", socket.id);
}); 

console.log("Polling server is running at 'http://localhost:3000'");