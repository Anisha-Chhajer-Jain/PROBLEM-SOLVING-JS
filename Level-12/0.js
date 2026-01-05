

// function isCoprime(a, b) {
//   return gcd(a, b) === 1;
// }

// console.log(isCoprime(7, 9)); // true

// // Q131. Largest Digit in a Number
// // Input: n = 5823 → Digits: 5,8,2,3 → Output: 8
// function largestDigit(n) {
//   let max = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     if (digit > max) {
//       max = digit;
//   }
//     n = Math.floor(n / 10);
//   }
//  console.log(max);
// }
// largestDigit(5823)); 




// Q135. Absolute Difference of Two Numbers
// Return |a - b|.
// Input: a = -5, b = 5 → Output: 10
function num(a,b){
    let s=0;
    s=Math.abs(a)+Math.abs(b);
    console.log(s);
}
num(-5,5)