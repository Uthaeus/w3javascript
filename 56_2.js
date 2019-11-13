// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.


const form = num => {
    let rev = num.toString().split('').reverse().join('');

    for (let x = 3, y = 0; x + y < rev.length; x += 3, y++) {
        let ind = x + y;
        rev = rev.slice(0, ind) + ',' + rev.slice(ind, rev.length);
    }

    return rev.split('').reverse().join('');
}


console.log(form(1000));
console.log(form(20));
console.log(form(100));
console.log(form(20000));
console.log(form(200000000))