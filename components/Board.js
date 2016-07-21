var React = require('react');
var Cell = require('./Cell');

var Board = React.createClass({
  createArray: function(rows){
    var array = [];
    for (var i=0; i < rows; i++){
      array[i] = [];
    }
    return array;
  },

  getInitialState: function(){
    return({
      array: this.createArray(this.props.size)
    });
  },

  render: function(){
    var board = this.state.array.map(function(innerArray){
      return (innerArray.map(function(element, key){
        return(<Cell state={element} id={key}/>);
      });
    );
  });
    return(
      <div className="grid">
        {board}
      </div>
    )
  }
});

module.exports = Board;
