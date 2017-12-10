function boxBlur(image) {
   let blurImg = [];
   let colLen = image.length;    // how many elements in each column  
   let rowLen = image[0].length; // how many elements in a row
   
   // drop a pixel of every side of the row and column or drop 2 elements from both dimensions
   // the first 2 loops will capture the 3 by 3 grid
   // the next 2 loops are used to iterate through the 3 by 3 grids, push the total and capture the next 3 by 3
   // push the total into the row array and the row array into blurImg array, which will be returned
   for(let x = 0; x < colLen - 2; x++) { 
      let row = [];
      for(let y = 0; y < rowLen - 2; y++) {
         let total = 0;
         for(let a = x; a < x + 3; a++) {
            for(let b = y; b < y + 3; b++) {
               console.log('image[a][b]: '+image[a][b]);
               total += image[a][b];
            }
         }
         row.push(Math.floor(total / 9));
         console.log('row: ' + row);
      }
      
      blurImg.push(row);
   }
   
   return blurImg;
}
