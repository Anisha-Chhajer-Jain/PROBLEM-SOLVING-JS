// Q33. Count Vowels (case-insensitive)
// Method 1: Using loop
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }
  console.log(count);
}

// Method 2: Using regex
function countVowels(str) {
  let match = str.match(/[aeiou]/gi);
  console.log(match ? match.length : 0);
}