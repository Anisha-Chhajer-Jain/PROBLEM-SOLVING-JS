

// Q22. Sum of Digits
// Method 1: Loop
let n = 123;
n = Math.abs(n);
let sum = 0;

while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);

// Method 2: String + reduce
let sum1 = Math.abs(n).toString().split("").reduce((a, b) => a + Number(b), 0);
console.log(sum1);
