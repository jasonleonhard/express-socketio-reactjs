// require, create({ propTypes, render()}), and module.export...
  // propTypes gives title of string and we require it

var React = require('react');
var Header = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div>
        <Header>{this.props.title}</Header>
      </div>
    );
  }
  // render() {
  //   return (
  //     <header>
  //       <h1>{this.props.title}</h1>
  //     </header>
  //   );
  // }

});

// 
module.exports = Header;
  // to use see APP.js      var Header = require('./parts/Header');
