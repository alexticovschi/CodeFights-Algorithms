// Check if all digits of the given integer are even.
// Example
//  For n = 248622, the output should be
//  evenDigitsOnly(n) = true;
//  For n = 642386, the output should be
//  evenDigitsOnly(n) = false.

function evenDigitsOnly(n) {
    let isEven = (val) => (val % 2 == 0);
    return n.toString().split('').every(isEven);
}
