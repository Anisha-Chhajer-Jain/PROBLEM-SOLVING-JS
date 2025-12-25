
// Q48. Remove All Vowels
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("hello"));      // hll
console.log(removeVowels("JavaScript")); // JvScrpt
console.log(removeVowels("AEIOU"));       // ""

//----------------------------------------------------------------------------

let str = "Prashant";
let vowel = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let con = ch.toLowerCase();
    if (con==='a'||con==='e'||con==='i'||con==='o'||con==='u'){
       
    }
    else {
        vowel += ch;
    }
}
console.log(vowel);  

