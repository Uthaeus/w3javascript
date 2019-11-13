// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.


const py = str => {
    if (str.substr(0, 2) == 'Py') {
        return str;
    } else {
        return 'Py' + str;
    }
}


console.log(py('diff'));
console.log(py('Pizza'));
console.log(py('Pyrite'));