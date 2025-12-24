
// Q26. Prime Number (Simple Check)
// Method 1: Loop till n-1
let n = 17;
let isPrime = n > 1;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime);

// Method 2: Optimized (√n)
// let isPrime = n > 1;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}