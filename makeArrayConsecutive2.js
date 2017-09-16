function makeArrayConsecutive2(statues) {
  // 1. Find the maximum and minimum values of the arguments
  // 2. Create a for loop, check if the number is contained in the array; if it's not, increment the count variable
  // 3. return the result
  var min = Math.min(...statues),
      max = Math.max(...statues),
      count = 0;

  for (var i = min; i < max; i++ ) {
    if (!statues.includes(i)) {
      count++;
    }
  }
  return count;
}
