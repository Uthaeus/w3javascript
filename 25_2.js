// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7


const mult = num => {
    return num % 3 == 0 || num % 7 == 0;
}


console.log(mult(6));
console.log(mult(23));
console.log(mult(49));