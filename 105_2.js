// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number



const reducer = num => {
    let valid = false;
    let count = 0;

    while (!valid) {
        let sum = 0;
        let numStr = num.toString();
        if (numStr.length == 1) {
            return count;
        }
        for (let x = 0; x < numStr.length; x++) {
            sum += +numStr[x]
        }
        num = sum;
        count++;
    }
}

console.log(reducer(123));
console.log(reducer(555));
console.log(reducer(7777));