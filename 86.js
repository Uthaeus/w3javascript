// Write a JavaScript program to find the types of a given array.


function angles(arr) {
  let greatest = 0;
  let total = arr.reduce(function(current, next) {
    return current += next;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > greatest) {
      greatest = arr[i];
    }
  }

  console.log('*****' + greatest.toString())

  if (total > 180 || total < 180) {
    return 'Sorry, your numbers do not add up correctly. Try again';
  }

  if (greatest == 90) {
    return 'Right Triangle';
  } else if (greatest > 90) {
    return 'Obtuse Triangle';
  } else {
    return 'Acute Triangle';
  }
}


console.log(angles([30, 90, 60]));
console.log(angles([40, 40, 100]));
console.log(angles([40, 40, 40]));
console.log(angles([80, 50, 50]));


function angles2(arr) {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 90) {
      result.push(`${arr[i]} is a Right Angle`);
    } else if (arr[i] > 90 && arr[i] < 180) {
      result.push(`${arr[i]} is an Obtuse Angle`);
    } else if (arr[i] == 180) {
      result.push(`${arr[i]} is a Straight Angle`);
    } else if (arr[i] < 90) {
      result.push(`${arr[i]} is an Acute Angle`);
    }
  }

  for (var j = 0; j < result.length; j++) {
    console.log(result[j]);
  }
}

angles2([30, 90, 60]);
angles2([40, 40, 100]);
angles2([40, 40, 40]);
angles2([80, 50, 50]);












