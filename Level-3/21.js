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
//gooddd way
function countDigits(num) {
  return Math.abs(num).toString().length;
}
console.log(countDigits(12345));

//with negative

let num = -9876;
num = Math.abs(num);

let count = num.toString().length;
console.log(count); // Output: 4
