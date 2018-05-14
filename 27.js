// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.

function check(str) {
  if (str.startsWith('Java')) {
    return true;
  } else {
    return false;
  }
}

console.log(check('test'));
console.log(check('Java'));
console.log(check('JavaScript'))
console.log(check('again'));