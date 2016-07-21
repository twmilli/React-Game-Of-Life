var React = require('react');
var Row = require('./Row');
var PropTypes = React.PropTypes;

var Board = function(props){
  var board = props.array.map(function(innerArray, key){
    return (<Row content={innerArray} size={props.boardSize} key={key} row={key} handleCellClick={props.handleCellClick}/>);
  }.bind(this));
    return(
      <div className="grid">
        {board}
      </div>
  );
}

Board.propTypes = {
  array: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)).isRequired,
  boardSize: PropTypes.string.isRequired,
  handleCellClick: PropTypes.func.isRequired,
}

module.exports = Board;
