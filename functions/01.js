// Write a JavaScript function that reverse a number.


const reverser = (n) => {
  var numArr = n.toString().split('').map(function(a) {
    return +a;
  });
  return numArr.reverse().join('');
}



console.log(reverser(32243));