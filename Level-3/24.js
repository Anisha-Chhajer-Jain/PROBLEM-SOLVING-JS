

// Q24. Reverse a Number
// Method 1: Math method
let n = -321;
let sign = Math.sign(n);
n = Math.abs(n);
let rev = 0;

while (n > 0) {
  rev = rev * 10 + (n % 10);
  n = Math.floor(n / 10);
}

console.log(sign * rev);

// Method 2: String reverse
let n1 = 100;
let sign1 = Math.sign(n1);
let rev1 = Number(Math.abs(n1).toString().split("").reverse().join(""));
console.log(sign1 * rev1);
