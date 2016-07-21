var React= require('react');
var Cell = require('./Cell');
var PropTypes = React.PropTypes;

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

Cell.propTypes = {
  content: PropTypes.arrayOf(PropTypes.bool),
  row: PropTypes.number.isRequired,
  handleCellClick: PropTypes.func.isRequired
}

module.exports = Row;
