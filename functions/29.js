// Write a JavaScript function to get the function name


function me() {
  console.log(arguments.callee.name);
}



me();