
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