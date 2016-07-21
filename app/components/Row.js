var React= require('react');
var Cell = require('./Cell');

var Row = React.createClass({
  render: function(){
    var cells = this.props.content.map(function(state, key){
      return(<Cell state = {state} row={this.props.row} col={key} key={key} handleCellClick={this.props.handleCellClick}/>);
    }.bind(this));

    return(
      <div className={"row " + this.props.size}>
      {cells}
      </div>
    );
  }
});

module.exports = Row;
