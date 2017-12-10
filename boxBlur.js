function boxBlur(image) {
   let blurImg = [];
   let colLen = image.length;    // how many elements in each column  
   let rowLen = image[0].length; // how many elements in a row
   
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
