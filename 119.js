// Write a JavaScript program to check if a given integer has an increasing digits sequence.


function increasing(n) {
  var numArr = n.toString().split('').map(function(a) {
    return +a;
  })

  for (var i = 0; i < numArr.length; i++) {
    temp = numArr[i];
    if (numArr[i + 1] < temp) {
      return false;
    }
  }

  return true;
}



console.log(increasing(234));
console.log(increasing(12345));
console.log(increasing(3453));