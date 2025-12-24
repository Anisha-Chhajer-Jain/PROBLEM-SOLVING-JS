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