function checkPalindrome($inputString) {
    // The strrev() function reverses a string.
    // check if the inputString IS EQUAL TO reversed string
    return $inputString === strrev($inputString);
}
