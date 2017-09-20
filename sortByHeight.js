function sortByHeight(a) { 
  // 1. create an array to keep track of indices
  // 2. create a new array, store all the numbers not equal to -1 and sort it
  // 4. insert '-1' at a specific index
  // 5 return the new array or the old(unmodified) sorted array

  let indices  = [], newArray = [];
  
  for (let i = 0; i < a.length; i++) {
    // if the number is eq to -1 add it to indices array, else add the number to newArray array
    a[i] == -1 ? indices.push(i) : newArray.push(a[i]);
  } 

  newArray.sort((a,b) => a > b);
  
  // insert number -1 at a specific index using splice(position, numberOfItemsToRemove, item)
  indices.map(index => newArray.splice(index, 0, -1 ));
  
  // if a includes the -1 value, return the newArray, else return the unmodified sorted array
  return a.includes(-1) ? newArray : a.sort((a,b) => a > b);
}
