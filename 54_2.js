//  Write a JavaScript program to count the number of vowels in a given string


const vow = str => {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let x = 0; x < str.length; x++) {
        if (vowels.includes(str[x])) {
            count++;
        }
    }
    return count;
}


console.log(vow('test'));
console.log(vow('longer test with more vowels'));