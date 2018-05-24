// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.)


var check = (str) => {
  var t1 = str[0];
  var t2 = str[str.length - 1];

  if (str.charCodeAt(t1) >= 65 && str.charCodeAt(t1) <= 97 && t2 == '.') {
    return true;
  }  else {
    return false;
  }
}


console.log(check('this is a test.'));
console.log(check('This is a test'));
console.log(check('This is a test.'));

