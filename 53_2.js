// Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string


const isThree = str => {
    for (let x = 0; x < str.length - 3; x++) {
        if (str[x] == 'a' && str[x + 3] == 'b' || str[x] == 'b' && str[x + 3] == 'a') {
            return true;
        }
    }
    return false;
}


console.log(isThree('test'));
console.log(isThree('a tbest'));
console.log(isThree('another test'));
console.log(isThree('affb'))