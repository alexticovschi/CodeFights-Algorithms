function isLucky(n) {
  let left_half,
      righ_thalf;
  // convert the integer to an array of numbers
  // parseInt(i, 10) will convert each element into a number.
  n = n.toString().split('').map((i) => parseInt(i, 10));
  
  function getSum(total, num) { return total + num }
  
  // split the array in half
  // left_half will store the first half of the array...
  // since splice() actually removes elements from the source array, ...
  // the remaining elements in the array will be the elements for the right_half.
  left_half = n.splice(0, n.length / 2);
  righ_thalf = n;
  
  // check if the arrays have the same value
  return left_half.reduce(getSum) == righ_thalf.reduce(getSum);
}
