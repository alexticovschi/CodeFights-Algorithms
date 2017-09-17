function commonCharacterCount(s1, s2) {
  
  let count = 0,
      arr1 = [],
      arr2 = [],
      alphabet_letters = 26;     
  
  // function that counts the number of occurrences of a character in a string
  function find_occurrences(str, char_to_count){
    return str.split(char_to_count).length - 1;
  }
    
  for (let i = 0; i < alphabet_letters; i++) {
    // this variable will store a letter of the alphabet with each iteration
    let letter = String.fromCharCode(i + 'a'.charCodeAt());
  
    // push the number of occurrences in each array
    arr1.push(find_occurrences(s1, letter));
    arr2.push(find_occurrences(s2, letter));

    // compare the two arrays and get the minimum value
    count += Math.min(arr1[i], arr2[i]);
  }
  
  return count;
}
