// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function findDif(num) {
  if (num <= 13) {
    var result = 13 - num;
  } else {
    var result = (num - 13) * 2;
  }
  return result;
}


console.log(findDif(10));
console.log(findDif(21));