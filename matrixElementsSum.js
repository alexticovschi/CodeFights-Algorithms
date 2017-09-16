function matrixElementsSum(matrix) {
  var roomCostTotal = 0;
  var hauntedRoomsIndex = [];
  
  
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hauntedRoomsIndex.push(j);
      } else if(hauntedRoomsIndex.indexOf(j) === -1) {
        roomCostTotal += matrix[i][j];
      }
    }
  }
 
  return roomCostTotal;
}
