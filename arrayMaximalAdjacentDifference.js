// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
// Example:
//    For inputArray = [2, 4, 1, 0], the output should be
//    arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
    let arr = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        arr.push(Math.abs(inputArray[i] - inputArray[i+1]));
    }
    arr.sort((a,b) => b > a);
    return arr[0];
}
