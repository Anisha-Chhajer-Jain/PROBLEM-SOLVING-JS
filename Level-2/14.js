
// Q14. Odd Numbers 1 to N
// Method 1: check odd
let N = 10;
for (let i = 1; i <= N; i++) {
  if (i % 2 !== 0) console.log(i);
}

// Method 2: direct step by 2
for (let i = 1; i <= N; i += 2) {
  console.log(i);
}