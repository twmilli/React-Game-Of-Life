var React= require('react');
var Cell = require('./Cell');

var Row = function(props){
  var cells = props.content.map(function(state, key){
    return(<Cell state = {state} key={key}/>);
  });
  return(
    <div className={"row " + props.size}>
    {cells}
    </div>
  );
}

module.exports = Row;
