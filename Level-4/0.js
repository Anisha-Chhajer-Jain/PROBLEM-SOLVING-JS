
// Q36. To Lowercase
// Method 1: Built-in
function toLower(str) {
  console.log(str.toLowerCase());
}

// Method 2: Manual
function toLower(str) {
  let res = "";
  for (let ch of str) {
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90)
      res += String.fromCharCode(code + 32);
    else
      res += ch;
  }
  console.log(res);
}

// Q37. Reverse a String
// Method 1: Loop
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
}

// Method 2: Built-in
function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}

// Q38. Palindrome String
// Method 1: Reverse & compare
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  console.log(str === rev);
}

// Method 2: Two pointers
function isPalindrome(str) {
  let i = 0, j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      console.log(false);
      return;
    }
    i++; j--;
  }
  console.log(true);
}

// Q39. Count Occurrences of 'a'
// Method 1: Loop
function countA(str) {
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if (ch === 'a') count++;
  }
  console.log(count);
}

// Method 2: Regex
function countA(str) {
  let match = str.match(/a/gi);
  console.log(match ? match.length : 0);
}
