// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example:
//   For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//   adjacentElementsProduct(inputArray) = 21.
//   7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) { 
    var newArr = inputArray.map((num, index) => num * inputArray[index + 1]).slice(0, inputArray.length - 1);  
    return newArr.reduce((a, b) => Math.max(a,b));
}
