// Write a JavaScript program to check if a string starts with 'Java' and false otherwise.


function java(str) {
    let temp = str.substr(0, 4);

    return temp == 'Java';
}


console.log(java('moo'));
console.log(java('Java'));
console.log(java('Javalin'));
console.log(java('Jav'))