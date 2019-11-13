// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop


const correct = str => {
    // if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90 && str.charCodeAt(str.length - 1) == 46) {
    //     return 'Correct';
    // }
    // return 'Incorrect';

    return str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90 && str.charCodeAt(str.length - 1) == 46 ? 'Correct' : 'Incorrect';
}

let str1 = 'This should be a correct sentence.'
let str2 = 'this is an incorrect sentence'

console.log(correct(str1));
console.log(correct(str2));