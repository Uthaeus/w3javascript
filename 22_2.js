// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.



const remove = i => {
    let str = 'This is a test string';

    let pre = str.slice(0, i);
    let post = str.substr(i + 1, str.length);

    return pre + post + '.';
}


console.log(remove(3));
console.log(remove(8));
