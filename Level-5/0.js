
// Q43. Check if String Contains a Character (case-sensitive)
function containsChar(str, ch) {
  return str.includes(ch);
}

console.log(containsChar("hello", "e")); // true
console.log(containsChar("hello", "a")); // false
console.log(containsChar("JavaScript", "S")); // false

// Q44. Compare Two Strings (Exact Match)
function compareStrings(a, b) {
  return a === b;
}

console.log(compareStrings("hello", "hello")); // true
console.log(compareStrings("Hello", "hello")); // false
console.log(compareStrings("js", "js "));       // false

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

// Q46. Count Uppercase Letters
function countUppercase(str) {
  let count = 0;
  for (let ch of str) {
    if (ch >= 'A' && ch <= 'Z') count++;
  }
  return count;
}

console.log(countUppercase("HeLLo"));     // 3
console.log(countUppercase("javascript"));// 0
console.log(countUppercase("JS 101"));    // 2

// Q47. Count Lowercase Letters
function countLowercase(str) {
  let count = 0;
  for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') count++;
  }
  return count;
}

console.log(countLowercase("HeLLo"));      // 2
console.log(countLowercase("JAVASCRIPT")); // 0
console.log(countLowercase("Js 101"));     // 1

// Q48. Remove All Vowels
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("hello"));      // hll
console.log(removeVowels("JavaScript")); // JvScrpt
console.log(removeVowels("AEIOU"));       // ""

// Q49. Remove All Digits
function removeDigits(str) {
  return str.replace(/[0-9]/g, "");
}

console.log(removeDigits("abc123"));        // abc
console.log(removeDigits("Js 101 course")); // Js  course
console.log(removeDigits("2025"));          // ""

// Q50. Toggle Case of Each Character (2–3 methods)
// Method 1: Using loop
function toggleCase1(str) {
  let res = "";
  for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') res += ch.toUpperCase();
    else if (ch >= 'A' && ch <= 'Z') res += ch.toLowerCase();
    else res += ch;
  }
  return res;
}

console.log(toggleCase1("HeLLo")); // hEllO

// Method 2: Using split + map
function toggleCase2(str) {
  return str
    .split("")
    .map(ch =>
      ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
    )
    .join("");
}

console.log(toggleCase2("abcDEF")); // ABCdef

// Method 3: Using ASCII values
function toggleCase3(str) {
  let res = "";
  for (let ch of str) {
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) res += String.fromCharCode(code + 32);
    else if (code >= 97 && code <= 122) res += String.fromCharCode(code - 32);
    else res += ch;
  }
  return res;
}

console.log(toggleCase3("Js 101")); // jS 101