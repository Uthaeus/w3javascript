// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.



const swap = str => {
    if (str.length <= 1) {
        return str;
    }

    let strArr = str.split('');
    let fToL = strArr[0], lToF = strArr[strArr.length - 1], mid = str.slice(1, str.length - 1);

    return lToF + mid + fToL;
}

console.log(swap('swap'));
console.log(swap('test with spaces'));