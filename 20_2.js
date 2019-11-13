// Write a JavaScript program to check from two given integers, if one is positive and one is negative.


const check = (a, b) => {
    return a >= 0 && b < 0 || a < 0 && b >= 0;
}

console.log(check(2, 4));
console.log(check(-3, -20));
console.log(check(5, -2));