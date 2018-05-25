// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.


const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}



console.log(isPrime(7));
console.log(isPrime(21));
console.log(isPrime(44));