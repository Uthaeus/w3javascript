// Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string


const compare = (str1, str2) => {
    let dict1 = {}, dict2 = {};

    for (let x = 0; x < str1.length; x++) {
        if (dict1[str1[x]]) {
            dict1[str1[x]]++;
        } else {
            dict1[str1[x]] = 1;
        }
    }
    for (let x = 0; x < str2.length; x++) {
        if (dict2[str2[x]]) {
            dict2[str2[x]]++;
        } else {
            dict2[str2[x]] = 1;
        }
    }
    for (let k in dict1) {
        if (dict1.hasOwnProperty(k)) {
            if (k != ' ' && dict1[k] !== dict2[k]) {
                return 'Not same';
            }
        }
    }
    for (let k in dict2) {
        if (dict2.hasOwnProperty(k)) {
            if (k != ' ' && dict2[k] !== dict1[k]) {
                return 'Not same';
            }
        }
    }
    return 'Same';
    
}

let str1 = 'this is a test';
let str2 = 'another test';
let str3 = 'tihssi a tset';

console.log(compare(str1, str2));
console.log(compare(str1, str3));