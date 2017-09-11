// Given an array of strings, return another array containing all of its longest strings.
// Example:
//   For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
//   allLongestStrings(inputArray) = ["aba", "vcd", "aba"].


function allLongestStrings(inputArray) {
  var sortArray =  inputArray.sort((a,b) => b.length - a.length); // sort the array, biggest to smallest 
  return sortArray.filter(word => word.length === sortArray[0].length); // filter the words that have the size equal to the size of the first word in the sorted array
}
