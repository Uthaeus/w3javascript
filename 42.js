// Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag is "false", however if "true" is false the numbers will in soft mode.


function number_order(x, y, z ) {
  if ( y > x && z > y) 
  {
    return "strict mode";    
  }
  else if(z > y) 
   return "Soft mode";
  else
    return "Undefinded";
}

console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));