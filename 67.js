// Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.



function newStr(str) {
  let first = str.slice(0, 1).toLowerCase();
  let last = str.slice(str.length - 1).toLowerCase();
  let body = str.slice(1, str.length - 1);

  if (first == 'p' || last == 'p') {
    return body;
  } else {
    return str;
  }
  
}


console.log(newStr('Principal'));
console.log(newStr('no p at the start or end here'));
console.log(newStr('something here ending in p'));