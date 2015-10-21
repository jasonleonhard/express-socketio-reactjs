// require libraries
var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');

// APP.js main component, render is a must renders <APP />,
// componentWillMount adds a socket and a listener/event handler for connect event
// aka when connected, we use connect function here
var APP = React.createClass({

  //
  getInitialState() {
      return {
          status: 'disconnected'
      }
  },

  // right before mounting a component these listners call handlers
    // handlers are: connect, disconnect...
  componentWillMount(){
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
  },

  // handler
  connect() {
    alert("Connected: " + this.socket.id);
  },

  // handler, will be sent to Header.js...
  disconnect() {
    alert("Disonnected: " + this.socket.id);
  },

  // always required. renders a returned html element or more
  render() {
    return (<h1> Hello World form React </h1>);
	}
});

module.exports = APP;