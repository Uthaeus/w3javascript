// Write a JavaScript program to find the smallest round number that is not less than a given value.


const round = (num) => {
  var result = undefined;
  var x = 0;

  const eval = function(n) {
    var tempArr = n.toString().split('').map(function(a) {
      return +a;
    })
    if (tempArr[tempArr.length - 1] == 0) {
      return true;
    } else {
      return false;
    }
  }

  while (result == undefined) {
    if (eval(num + x)) {
      result = num + x;
    } else {
      x++;
    }
  }
  return result;

}


console.log(round(589));
console.log(round(521));