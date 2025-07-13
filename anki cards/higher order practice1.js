let arr = [1, 2, 3, 4, 5];

function multiplyby2(num) {
  return num * 2;
}

function higherFunction(arr, multiplyby2) {
  for (let i = 0; i < arr.length; i++) {
    console.log(multiplyby2(arr[i]));
  }
}

higherFunction(arr, multiplyby2);
