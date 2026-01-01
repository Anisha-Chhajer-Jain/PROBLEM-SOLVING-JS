function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }

  return second;
}

console.log(secondLargest([10, 5, 8, 20])); // 10







