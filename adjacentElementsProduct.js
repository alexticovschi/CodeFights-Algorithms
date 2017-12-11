// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example:
//   For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//   adjacentElementsProduct(inputArray) = 21.
//   7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
    
    //SECOND SOLUTION
    // var newArr = inputArray.map((num, index) => num * inputArray[index + 1]).slice(0, inputArray.length - 1);  
    // return newArr.reduce(function(a, b) {
    //    return Math.max(a,b);
    // }); 
    
    //THIRD SOLUTION
    // iterate over the inputArray array and multiply each number with its adjacent number (i.e. 3 * 6, 6 * -2, -2 * -5, -5 * 7, 7 * 3)
    // then sort the array from highest to lowest, and then return the first number from the newArr array, i.e. the highest number(the largest product)
    // 
    // let newArr = inputArray.map((num, index) => num * inputArray[index + 1]).sort((a,b) => b > a);  
    // return newArr[0]; 
    
    return inputArray.map((num, index) => num * inputArray[index + 1]).sort((a,b) => b > a)[0]; 
}
