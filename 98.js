// Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.


function caser(str) {
  let upper = 0;
  let lower = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      upper++;
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      lower++;
    } 
  }

  console.log(upper, lower);

  if (upper > lower) {
    return str.toUpperCase();
  } else if (lower > upper) {
    return str.toLowerCase();
  } else {
    return str;
  }
}


console.log(caser('This is a Test'));
console.log(caser('THIS IS ALSO a Test'));