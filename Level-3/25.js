
// Q25. Palindrome Number
// Method 1: Reverse & compare
let n = 121;
let original = n;
let rev = 0;

while (n > 0) {
  rev = rev * 10 + (n % 10);
  n = Math.floor(n / 10);
}

console.log(original === rev);

// Method 2: String check
let str = n.toString();
console.log(str === str.split("").reverse().join(""));
