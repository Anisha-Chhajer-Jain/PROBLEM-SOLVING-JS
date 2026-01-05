
// // Q128. Count Numbers Divisible by Both 2 and 5 (1 to n)
// // Input: n = 10 → Numbers: 10 → Output: 1
// function multi(num){
//     let s=0;
//     for(let i=1;i<=num;i++){
//         if(i%2==0 && i%5==0)
//         s++;
//     }
//     console.log(s);
// }
// multi(10)

// // Q129. Perfect Number
// // Input: n = 10 Divisors: 1,2,5 → Sum = 8 → Output: false
// function multi(num){
//     let s=0;
//     for(let i=1;i<=num/2;i++){
//         if(num%i===0)
//         s=s+i;
//     }
//     console.log(s);
// }
// multi(10)

// // Q130. Co-prime Numbers
// // Input: a = 7, b = 9 → GCD = 1 → Output: true
// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

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