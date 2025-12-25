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
