// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function primeArr(num) {
  let primes = [2];

  for (var i = 3; i < num; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  console.log(primes);
}


primeArr(20);
primeArr(50);
