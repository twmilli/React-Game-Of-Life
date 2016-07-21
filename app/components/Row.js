var React= require('react');
var Cell = require('./Cell');

var Row = React.createClass({
  render: function(){
    var cells = this.props.content.map(function(state, key){
      return(<Cell state = {state} key={key}/>);
    });
    return(
      <div className={"row " + this.props.size}>
      {cells}
      </div>
    );
  }
});

module.exports = Row;
