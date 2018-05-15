// Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.



function check(str) {
  if ((/a...b/).test(str) || (/b...a/).test(str)) {
    return true;
  } else {
    return false;
  }
}


console.log(check('what about this one'));
console.log(check('Here is another'));
console.log(check('Chainsbreak'));