// Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.


function check(str1, str2) {
  let newStr1 = str1.toLowerCase().split(' ').join('').split('').sort().join('');
  let newStr2 = str2.toLowerCase().split(' ').join('').split('').sort().join('');
  let obj1 = {};
  let obj2 = {};

  if (newStr1.length != newStr2.length) {
    return 'Negative';
  }

  console.log(newStr1);
  console.log('************');
  console.log(newStr2);

  for (var i = 0; i < newStr1.length; i++) {
    if (obj1[newStr1[i]]) {
      obj1[newStr1[i]] += 1;
    } else {
      obj1[newStr1[i]] = 1;
    }
  }

  for (var j = 0; j < newStr2.length; j++) {
    if (obj2[newStr2[j]]) {
      obj2[newStr2[j]] += 1;
    } else {
      obj2[newStr2[j]] = 1;
    }
  }
  console.log('*********');
  console.log(obj1);
  console.log(obj2);
  console.log('**********');

  function jasonEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  let result = jasonEqual(obj1, obj2);
  return result;
}

let test1 = 'this is a test';
let test2 = 'another test';
let test3 = 'naohtreestt';
let test4 = 'another test';

console.log(check(test1, test2));
console.log(check(test2, test3));
console.log(check(test2, test4));


// function jsonEqual(a,b) {
//     return JSON.stringify(a) === JSON.stringify(b);
// }



