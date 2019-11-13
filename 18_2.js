// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.



const fifty = (a, b) => {
    return a == 50 || b == 50 || a + b == 50;
}

console.log(fifty(20, 30));
console.log(fifty(2, 5));
console.log(fifty(50, 10));