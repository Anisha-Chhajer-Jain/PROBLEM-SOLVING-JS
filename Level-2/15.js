// Q15. Sum 1 to N
// Method 1: loop sum
let N = 5, sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log(sum);

// Method 2: formula

console.log((N * (N + 1)) / 2);
