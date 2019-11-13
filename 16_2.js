// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.


const sums = (a, b) => {
    if (a == b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}


console.log(sums(3, 5));
console.log(sums(3, 3));