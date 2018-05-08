// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function findAbs(num) {
  if (num > 19) {
    var result = (num - 19) * 3;
  } else {
    var result = 19 - num;
  }
  return result;
}

console.log(findAbs(20));
console.log(findAbs(18));