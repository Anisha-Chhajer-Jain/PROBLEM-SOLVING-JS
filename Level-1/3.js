// Q3. Maximum of Three Numbers
// Method 1: if-else ladder
let a = 3, b = 7, c = -5;

if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}

// Method 2: Math.max()

console.log(Math.max(a, b, c));
