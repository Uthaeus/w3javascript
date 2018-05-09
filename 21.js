// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

function addPy(str) {
  var test = str.slice(0, 2);

  if (test == 'Py') {
    return str;
  } else {
    return 'Py' + str.toLowerCase();
  }
}

console.log(addPy("happyhappy"));
console.log(addPy("Python"))