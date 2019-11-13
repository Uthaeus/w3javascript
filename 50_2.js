// Write a JavaScript program to convert the letters of a given string in alphabetical order.


function alphSort(str) {
    let sorted = str.split('').sort((a, b) =>{
        return a > b;
    })
    return sorted.join('');
}


console.log(alphSort('test'));