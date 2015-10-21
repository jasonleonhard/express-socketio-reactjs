// require libaries, variable to call later
var express = require('express');
var app = express();

// use/serve static files in folders listed
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// open port 3000 with express and notify user
app.listen(3000);
console.log("Polling server is running at 'http://localhost:3000'");