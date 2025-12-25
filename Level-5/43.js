
// Q43. Check if String Contains a Character (case-sensitive)
function containsChar(str, ch) {
  return str.includes(ch);
}

console.log(containsChar("hello", "e")); // true
console.log(containsChar("hello", "a")); // false
console.log(containsChar("JavaScript", "S")); // false

//---------------------------------------------------------------------

var sen = "i ate an apple today"

sen = sen.toLowerCase()
var new_sen = ''
for(i=0 ; i<sen.length ; i++){
    if(sen[i] == 'a'){
        new_sen = new_sen + 'e'
    }
    else{
        new_sen = new_sen + sen[i];
    }
}
console.log(new_sen)