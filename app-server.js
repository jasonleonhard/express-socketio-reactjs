// require libaries, variable to call later
var express = require('express');
var app = express();

// connections array stores connections.push socket.id(s)
var connections = [];

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
  // on disconnect we callback function the connections array and splice|remove out that index, by comparing socket variables
io.sockets.on('connection', function (socket) {
    
    socket.once('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconencted: %s socket.id:", socket.id);
        console.log("Disconencted: %s. Sockets remaining.", connections.length);
    });

    connections.push(socket);
    console.log("Connected: %s socket.id:", socket.id);
    console.log("Connected: %s socket:", connections.length);

}); 

console.log("Polling server is running at 'http://localhost:3000'");