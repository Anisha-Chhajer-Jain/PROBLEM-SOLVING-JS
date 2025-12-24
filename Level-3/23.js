// Q23. Product of Digits
// Method 1: Loop
let n = 46;
n = Math.abs(n);
let product = 1;

while (n > 0) {
  product *= n % 10;
  n = Math.floor(n / 10);
}

console.log(product);

// Method 2: String
let num1 = 505;
let prod = Math.abs(num1).toString().split("").reduce((a, b) => a * Number(b), 1);
console.log(prod);
