
// Q18. Count Numbers Divisible by 3 (1 to N)
// Method 1: loop + count
let N = 10, count = 0;
for (let i = 1; i <= N; i++) {
  if (i % 3 === 0) count++;
}
console.log(count);

// Method 2: mathematical approach

console.log(Math.floor(N / 3));

