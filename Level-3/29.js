

// Q29. GCD of Two Numbers
// Method 1: Loop
let a = 12, b = 18;
let gcd = 1;

for (let i = 1; i <= Math.min(a, b); i++) {
  if (a % i === 0 && b % i === 0) gcd = i;
}

console.log(gcd);

// Method 2: Euclidean Algorithm
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

console.log(a);
