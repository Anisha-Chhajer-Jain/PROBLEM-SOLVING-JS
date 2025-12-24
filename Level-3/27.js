

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
