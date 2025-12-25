// Q34. Count Consonants
// Method 1: Using loop
function countConsonants(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z' && !vowels.includes(ch)) {
      count++;
    }
  }
  console.log(count);
}

// Method 2: Using regex
function countConsonants(str) {
  let match = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  console.log(match ? match.length : 0);
}