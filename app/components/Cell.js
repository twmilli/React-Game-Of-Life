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
    return (<div className={"cell " + active} data-row={this.props.row} data-col={this.props.col} onClick={this.props.handleCellClick}></div>)
  }
});

module.exports = Cell;
