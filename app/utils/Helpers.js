
var getNumNeighbors = function(row, col, array){
  var coordList =
  [[row, col+1],
  [row, col-1],
  [row+1, col],
  [row-1, col],
  [row-1, col-1],
  [row-1, col+1],
  [row+1, col-1],
  [row+1, col+1]];

  var count=0;
  for (var i=0; i < coordList.length; i++){
    var coord = coordList[i];
    if (count > 3){
      return count;
    }
    if (coord[0] < 0 || coord[0] >= array.length || coord[1] < 0 || coord[1] >= array[0].length){

    }
    else if (array[coord[0]][coord[1]]){
      count++;
    }
  }
  return count;
}

var Helpers = {
  update: function(array){
    var changed = false;
    for (var row = 0; row < array.length; row++){
      for (var col=0; col < array[0].length; col++){
        var neighbors = getNumNeighbors(row, col, array);
        var cell = array[row][col];
        if (cell && neighbors < 2){
          array[row][col] = false;
          changed = true;
        }
        else if (!cell && neighbors == 3){
          array[row][col] = true;
          changed = true;
        }
        else if (cell && neighbors > 3){
          array[row][col] = false;
          changed = true;
        }
      }
    }
    if (changed){
      return array;
    }
    return false;
  }
}

module.exports = Helpers;
