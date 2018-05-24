// Write a JavaScript program to find the smallest prime number strictly greater than a given number.


const nextPrime = (n) => {
  var result = undefined;
  var x = 1;

  const isPrime = function(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
    return num !== 1;
  }

  while (result == undefined) {
    if (isPrime(n + x)) {
      result = n + x;
    } else {
      x++;
    }
  }

  return result;
}


console.log(nextPrime(5));
console.log(nextPrime(40));
