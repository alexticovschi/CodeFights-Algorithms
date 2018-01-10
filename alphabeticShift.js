// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
// Example:
//  For inputString = "crazy", the output should be
//  alphabeticShift(inputString) = "dsbaz".

// ### First Solution
// function alphabeticShift(inputString) {
//     ascii_code = [];
    
//     for(let i = 0; i < inputString.length; i++) {
//         ascii_code.push(inputString[i].charCodeAt(0));
//     }
    
//     for(let i = 0; i < ascii_code.length; i++) {
//         ascii_code[i] == 122 ? ascii_code[i] = 97 : ascii_code[i]++;
//     }
    
//     return ascii_code.map(code => String.fromCharCode(code)).join('');
// }

function alphabeticShift(inputString) {
    ascii_code = [];
    for(let i = 0; i < inputString.length; i++) ascii_code.push(inputString[i].charCodeAt(0));
    
    return ascii_code.map(code => code == 122 ? code = 97 : code + 1 )
                     .map(code => String.fromCharCode(code)).join('');
}
