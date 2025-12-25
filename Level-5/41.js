// Q41. Count Words in a Sentence
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

console.log(countWords("Hello world"));            // 2
console.log(countWords("JavaScript is fun"));      // 3
console.log(countWords("  this   is   spaced  ")); // 3

//--------------------------------------------------

var sen = "i ate an apple today"

//-------------------------------------------------

var s=0;
sen =sen.trim()
for (i of sen){
    if(i.charCodeAt() == 32){
        s++;
    }
}
console.log(s+1)