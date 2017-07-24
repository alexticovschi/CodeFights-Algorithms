function checkPalindrome(inputString) {
    // convert the string into an array of letters, reverse the order and the convert it back to a string
    var str = inputString.split('').reverse().join('');
    // return true if those 2 strings are equal, else return false
    return str === inputString;
}
