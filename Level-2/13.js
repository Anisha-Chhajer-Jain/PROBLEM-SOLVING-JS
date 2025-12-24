// Q13. Even Numbers 1 to N
// Method 1: check even
let N = 10;
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) console.log(i);
}

// Method 2: direct step by 2

for (let i = 2; i <= N; i += 2) {
  console.log(i);
}