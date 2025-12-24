


// Q16. Product 1 to N
// Method 1: loop
let N = 4, product = 1;
for (let i = 1; i <= N; i++) {
  product *= i;
}
console.log(product);

// Method 2: while loop
// let N = 5, i = 1, product = 1;
while (i <= N) {
  product *= i;
  i++;
}
console.log(product);

// Q17. Multiplication Table of a Number
// Method 1: normal loop
let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n * i);
}

// Method 2: while loop
while (i <= 10) {
  console.log(n * i);
  i++;
}

// Q18. Count Numbers Divisible by 3 (1 to N)
// Method 1: loop + count
let N = 10, count = 0;
for (let i = 1; i <= N; i++) {
  if (i % 3 === 0) count++;
}
console.log(count);

// Method 2: mathematical approach

console.log(Math.floor(N / 3));

// Q19. Factorial (Iterative)
// Method 1: for loop
let N = 5, fact = 1;
for (let i = 1; i <= N; i++) {
  fact *= i;
}
console.log(fact);

// Method 2: while loop (handles 0!)

let i = 1;
while (i <= N) {
  fact *= i;
  i++;
}
console.log(fact);

// Q20. First N Multiples of 7
// Method 1: multiply inside loop
let N = 5;
for (let i = 1; i <= N; i++) {
  console.log(7 * i);
}

// Method 2: cumulative addition

for (let i = 1; i <= N; i++) {
  num += 7;
  console.log(num);
}