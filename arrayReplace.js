// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
/ Example:
//  For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
//  arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

function arrayReplace(inputArray, elemToReplace, substitutionElem) {    
    
    // *** SECOND SOLUTION ***    
    return inputArray.map((num) => num == elemToReplace ? num = substitutionElem : num);     
      
    // ***  FIRST SOLUTION  ***        
    // for(let i = 0; i < inputArray.length; i++) {
    //     if(inputArray[i] == elemToReplace) {
    //         inputArray.splice(i, 1, substitutionElem);
    //     }
    // }

    // return inputArray;
}
