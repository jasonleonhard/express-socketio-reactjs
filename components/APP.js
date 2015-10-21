// require libraries
var React = require('react');
var io = require('socket.io-client');

// APP.js main component, render is a must renders <APP />, 
// componentWillMount adds a socket and a listener/event handler for connect event
  // aka when connected, we use connect function here

var APP = React.createClass({
  
  componentWillMount(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  },
  
  connect() {
    alert("Connected: " + this.socket.id);
  },
  
  render() {
    return (<h1> Hello World form React </h1>);
	}
});

module.exports = APP;