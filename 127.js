// Write a JavaScript program to reverse the order of the bits in a given integer.


const bits = (b) => {
  var ans = 0;
  var newB = b.toString().split('').map(function(a) {
    return +a;
  });

  var result = [newB[0]];

  for (var i = 1; i < newB.length; i++) {
    var temp = newB[i] * (2 ** i);
    result.push(temp);
  }

  for (var j = 0; j < result.length; j++) {
    ans += result[j];
  }

  return ans;
}


console.log(bits(111000));
console.log(bits(11101010));