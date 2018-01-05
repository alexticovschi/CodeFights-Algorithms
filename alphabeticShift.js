// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
// Example:
//  For inputString = "crazy", the output should be
//  alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    ascii_code = [];
    
    for(let i = 0; i < inputString.length; i++) {
        ascii_code.push(inputString[i].charCodeAt(0));
    }
    
    for(let i = 0; i < ascii_code.length; i++) {
        ascii_code[i] == 122 ? ascii_code[i] = 97 : ascii_code[i]++;
    }
    
    return ascii_code.map(code => String.fromCharCode(code)).join('');
}
