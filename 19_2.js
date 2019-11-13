//  Write a JavaScript program to check a given integer is within 20 of 100 or 400. 



const check = num => {
    return num >= 80 && num <= 120 || num >= 380 && num <= 420;
}

console.log(check(10));
console.log(check(110));
console.log(check(390));
console.log(check(450));