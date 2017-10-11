//Given a string, find out if its characters can be rearranged to form a palindrome.
//Example:
//  For inputString = "aabb", the output should be
//  palindromeRearranging(inputString) = true.
//  We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
    let letters_total = {};
    let count = 0;

    inputString.split("").map(letter => {
        letters_total[letter] = letters_total[letter] || 0;
        letters_total[letter]++;    
    });
    
    Object.keys(letters_total).map( letter => count += letters_total[letter] % 2 );
    return count < 2;
}
