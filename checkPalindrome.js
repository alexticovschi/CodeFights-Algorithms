// Given the string, check if it is a palindrome.

// Example
//  For inputString = "aabaa", the output should be
//  checkPalindrome(inputString) = true;
//  For inputString = "abac", the output should be
//  checkPalindrome(inputString) = false;
//  For inputString = "a", the output should be
//  checkPalindrome(inputString) = true.

function checkPalindrome(inputString) {
    // convert the string into an array of letters, reverse the order and the convert it back to a string
    var str = inputString.split('').reverse().join('');
    // return true if those 2 strings are equal, else return false
    return str === inputString;
}
