// Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.
// Example
//  For name = "var_1__Int", the output should be
//      variableName(name) = true;
//  For name = "qq-q", the output should be
//      variableName(name) = false;
//  For name = "2w2", the output should be
//      variableName(name) = false.

function variableName(name) {
    if(name.match(/\[/g) || name.match(/\]/g) || name.match(/\-/g) || name.match(/\ /g)) {
        return false;
    }
    
    if(name.match(/\_/g)) return true;
    
    if ('0' <= name[0] && name[0] <= '9') {
        return false;
    }
    for(let i = 0; i < name.length; i++) {
        if (!('a' <= name[i].toLowerCase() && name[i].toLowerCase() <= 'z') ||
              '0' <= name[i] && name[i] <= '9') {
            return false;
        }
        return true;
    }
}
