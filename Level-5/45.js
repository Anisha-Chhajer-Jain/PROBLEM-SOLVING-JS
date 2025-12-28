// Q45. Count Digits in a String
// Input: "abc123" → Output: 3
function digit(str) {
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      c++;
    }
  }
  console.log(c);
}
digit("abs12");



// Q45. Count Digits in a String
function countDigits(str) {
  let count = 0;
  for (let ch of str) {
    if (ch >= '0' && ch <= '9') count++;
  }
  return count;
}

console.log(countDigits("abc123"));   // 3
console.log(countDigits("2025 year"));// 4
console.log(countDigits("no digits"));// 0

//--------------------------------------------------------------------

let str = "CodingGIta123634";

let str2 = "1234567890";

let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str2.includes(str[i])) {
    count++;
  }
}

// let str = "anisha1620";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     ch=str[i];
//     if(ch>='0' && ch<='9')
//         count++;
//     }
// console.log(count);  
