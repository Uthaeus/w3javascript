// Write a JavaScript program to check if a given number is in a given range.


function inRange(n, l, h) {
  var range = [];

  for (var i = l; i <= h; i++) {
    range.push(i);
  }

  console.log(range);

  return range.includes(n);

}


console.log(inRange(3, 1, 5));