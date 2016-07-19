var React = require('react');
var Board = require('../components/Board');

var BoardContainer = React.createClass({
  createArray: function(rows, cols){
    var array = [], row=[];
    while (cols--) row.push(0);
    while (rows--) array.push(row.slice());
    console.log(array);
    return array;
  },

  getInitialState: function(){
    var size = [70,100]
    return({
      boardSize: 'lg',
      size: size,
      array: this.createArray(size[0], size[1]),
      generation: 0
    });
  },

  render: function(){
    return(
      <div>
        <div id='title'>Conway's Game of Life</div>
        <br/>
        <div className="menu">
          <button id='run' className='fa fa-play'/>
          <button id='pause' className='fa fa-pause'/>
          <button id='clear' className='fa fa-trash'/>
          <button id='random' className='fa fa-random'></button>
          <span> Generation: {this.state.generation}</span>
        </div>
        <Board size={this.state.size} boardSize={this.state.boardSize} array={this.state.array}/>

        <div className='size-btns'>
          <input type="radio" name='size' id='sm' checked='checked'/>
          <label for='small'>Small</label>
          <input type="radio" name='size' id='med'/>
          <label for='med'>Medium</label>
          <input type="radio" name='size' id='lg'/>
          <label for='lg'>Large</label>
        </div>
      </div>
    )
  }
});

module.exports = BoardContainer;
