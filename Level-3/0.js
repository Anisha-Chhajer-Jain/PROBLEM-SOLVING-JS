
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
let isPrime = n > 1;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime);

// Q27. All Primes from 1 to N
// Method 1: Nested loops
let N = 10;

for (let i = 2; i <= N; i++) {
  let prime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) console.log(i);
}

// Method 2: √n optimization

for (let i = 2; i <= N; i++) {
  let prime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) console.log(i);
}

// Q28. First N Fibonacci Numbers
// Method 1: Loop
let N = 5;
let a = 0, b = 1;

for (let i = 0; i < N; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}

// Method 2: Array approach
let fib = [0, 1];

for (let i = 2; i < N; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}

console.log(fib.slice(0, N).join(" "));

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

// Q30. LCM of Two Numbers
// Method 1: Using GCD
let a = 4, b = 6;

function gcd(x, y) {
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

console.log((a * b) / gcd(a, b));

// Method 2: Loop method
let lcm = Math.max(a, b);

while (true) {
  if (lcm % a === 0 && lcm % b === 0) {
    console.log(lcm);
    break;
  }
  lcm++;
}