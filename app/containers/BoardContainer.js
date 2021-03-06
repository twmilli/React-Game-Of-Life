var React = require('react');
var Board = require('../components/Board');
var SizeButtons = require('../components/SizeButtons');
var SpeedButtons = require('../components/SpeedButtons');
var Helpers = require('../utils/Helpers');

var BoardContainer = React.createClass({
  createArray: function(rows, cols){
    var array = [], row=[];
    while (cols--) row.push(false);
    while (rows--) array.push(row.slice());
    return array;
  },

  handleCellClick: function(e){
    var cell = e.currentTarget;
    var row = cell.getAttribute('data-row');
    var col = cell.getAttribute('data-col');
    var newArray = this.state.array;
    newArray[row][col] = true;
    this.setState({
      array: newArray
    });
  },

  populateArray: function(rows, cols){
    var PERCENT_ACTIVE = 0.1;
    var activeCells = PERCENT_ACTIVE * rows * cols;
    var newArray = this.createArray(rows, cols);
    while (activeCells){
      var row = Math.floor(Math.random() * rows);
      var col = Math.floor(Math.random() * cols);
      newArray[row][col] = true;
      activeCells--;
    }
    return newArray;
  },

  getDimensions: function(size){
    var DIMENSIONS = [[30,50], [50,70],[70,100]];
    return DIMENSIONS[size];
  },

  handleSizeChange: function(e){
    var newSize = e.currentTarget.value;
    var newDim = this.getDimensions(newSize);
    this.setState({
      size: newSize,
      array: this.populateArray(newDim[0], newDim[1]),
      generation: 0
    });
  },

  random: function(){
    var currDim = this.getDimensions(this.state.size);
    var rows = currDim[0];
    var cols = currDim[1];
    var newArray = this.state.array;
    var PERCENT_ACTIVE = 0.1;
    var activeCells = PERCENT_ACTIVE * rows * cols;
    while (activeCells){
      var row = Math.floor(Math.random() * rows);
      var col = Math.floor(Math.random() * cols);
      newArray[row][col] = true;
      activeCells--;
    }
    this.setState({
      array: newArray,
      generation: 0
    });
  },

  clear: function(){
    var dim = this.getDimensions(this.state.size);
    clearInterval(this.updating);
    this.setState({
      array: this.createArray(dim[0], dim[1]),
      generation: 0
    });
  },

  start: function(speed){
    if (speed == null){
      speed = this.state.speed;
    }
    this.updating = setInterval(this.update, this.getInterval(speed));
  },

  getInterval: function(speed){
    if (speed == 'slow'){
      return 500;
    }
    else if (speed == 'medium'){
      return 200;
    }
    else{
      return 50;
    }
  },

  stop: function(){
    clearInterval(this.updating);
  },

  update:function(){
    var array = this.state.array;
    var generations = this.state.generation+1;
    var newArray = Helpers.update(this.state.array);
    if (newArray === false){
      this.stop();
    }
    else{
      this.setState({
        array: newArray,
        generation: generations
      });
    }
  },

  handleSpeedChange: function(e){
    this.stop();
    var newSpeed = e.currentTarget.value;
    this.setState({
      speed: newSpeed
    });
    this.start(newSpeed);
  },

  getInitialState: function(){
    var dim = this.getDimensions(0);
    return({
      size: 0,
      array: this.populateArray(dim[0], dim[1]),
      generation: 0,
      speed: 'fast'
    });
  },

  componentDidMount:function(){
    this.start();
  },

  getBoardSize: function(){
    BOARD_CLASSES=['sm', 'md', 'lg'];
    return (BOARD_CLASSES[this.state.size]);
  },

  render: function(){
    return(
      <div>
        <div id='title'>Conway's Game of Life</div>
        <br/>
        <div className="menu">
          <button id='run' className='fa fa-play' onClick={this.start}/>
          <button id='pause' className='fa fa-pause' onClick={this.stop}/>
          <button id='clear' className='fa fa-trash' onClick={this.clear}/>
          <button id='random' className='fa fa-random' onClick={this.random}></button>
          <span> Generation: {this.state.generation}</span>
        </div>
        <Board boardSize={this.getBoardSize()} array={this.state.array} handleCellClick={this.handleCellClick}/>
        <SizeButtons size={this.state.size} onRadioChange={this.handleSizeChange}/>
        <SpeedButtons speed={this.state.speed} onRadioChange={this.handleSpeedChange} />
      </div>
    )
  }
});

module.exports = BoardContainer;
