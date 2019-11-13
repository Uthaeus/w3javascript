// Write a JavaScript program to reverse the order of the bits in a given integer


const binRev = num => {
    let rev = num.toString(2).split('').reverse().join('');
    return parseInt(rev, 2);
}


console.log(binRev(56));
console.log(binRev(234))