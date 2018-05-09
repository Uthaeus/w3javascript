// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

function numCheck(num) {
  if (num % 3 == 0 && num % 7 == 0) {
    return "Your number is a multiple of 3 and 7";
  } else if (num % 7 == 0) {
    return "Your number is a multiple of 7";
  } else if (num % 3 == 0) {
    return "Your number is a multiple of 3";
  } else {
    return "Your number is not a multiple of 3 or 7";
  }
}


console.log(numCheck(9));
console.log(numCheck(21));
console.log(numCheck(26));
console.log(numCheck(28));