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

