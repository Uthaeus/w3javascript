// Write a JavaScript function to compute the factors of a positive integer.


const factors = n => {
  var result = [];

  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      result.push(i);
    }
  }

  return result.join(', ');
}


console.log(factors(12));