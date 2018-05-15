// Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.


function arrs(arr) {
  let thirty = 0;
  let forty = 0;
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 30) {
      thirty++;
    } else if (arr[i] == 40) {
      forty++;
    }
  }
  if (thirty < 2 && forty < 2) {
    result.push('Nothing');
  }

  if (thirty >= 2) {
    result.push(`30 appears ${thirty} times`);
  }
  if (forty >= 2) {
    result.push(`40 appears ${forty} times`);
  }
  for (var j = 0; j < result.length; j++) {
    console.log(result[j]);
  }

}


arrs([1, 2, 3]);
arrs([30, 30, 3, 4, 40]);
arrs([30, 30, 40, 40]);