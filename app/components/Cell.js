var React = require('react');

var Cell = React.createClass({
  shouldComponentUpdate: function(nextProps){
    return(nextProps.state !== this.props.state);
  },

  render: function(){
    var active = '';
    if (this.props.state){
      active='active';
    }
    return (<div className={"cell " + active}></div>)
  }
});

module.exports = Cell;
