// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.


function check(c) {
    let str = 'This is a test string';
    let count = 0;

    for (let x = 0; x < str.length; x++) {
        if (str[x] == c) {
            count++;
        }
    }
    return count >= 2 && count <= 4;
}

console.log(check('i'));
console.log(check('g'));
console.log(check('t'));
console.log(check('z'));