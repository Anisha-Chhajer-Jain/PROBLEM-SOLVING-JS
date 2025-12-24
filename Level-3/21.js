// Q21. Count Digits in a Number
// Method 1: Loop + Math
let n = -98;
n = Math.abs(n);

if (n === 0) {
  console.log(1);
} else {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  console.log(count);
}

// Method 2: String length
console.log(Math.abs(n).toString().length);