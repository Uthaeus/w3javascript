// Write a JavaScript program to add two digits of a given positive integer of length two.


function add(num) {
  let ones = num % 10;
  let tens = Math.floor(num / 10);

  return tens + ones;
}


console.log(add(25));

console.log(add(33));
console.log(add(44));