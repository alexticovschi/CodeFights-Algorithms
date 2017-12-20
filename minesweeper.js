// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number
// in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we 
// want to create a Minesweeper game setup.
//Example:
//For
//    matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be
//     minesweeper(matrix) = [[1, 2, 1],
//                            [2, 1, 1],
//                            [1, 1, 1]]

function minesweeper(matrix) {
    let mineCount = [];

    for(let i = 0; i < matrix.length; i++) {
        mineCount.push([]);
        for(let j = 0; j < matrix[i].length; j++) {
            mineCount[i][j] = 0;
            //console.log(mineCount);;
            if(matrix[i][j - 1] === true) mineCount[i][j]++;
            
            if(matrix[i][j + 1] != undefined && matrix[i][j + 1] === true) mineCount[i][j]++;
            
            if(matrix[i - 1] && matrix[i - 1][j] === true) mineCount[i][j]++;
            
            if(matrix[i + 1] != undefined && matrix[i + 1][j] === true) mineCount[i][j]++;
            
            if(matrix[i + 1] != undefined && matrix[i + 1][j + 1] === true) mineCount[i][j]++;  

            if(matrix[i + 1] != undefined && matrix[i + 1][j - 1] === true) mineCount[i][j]++;      
            
            if(matrix[i - 1] != undefined && matrix[i - 1][j + 1] === true) mineCount[i][j]++;          
            
            if(matrix[i - 1] != undefined && matrix[i - 1][j - 1] === true) mineCount[i][j]++;
         }
    }
    return mineCount;
}
