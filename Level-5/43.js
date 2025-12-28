// Q43. Check if String Contains a Character
// Input: str = "hello", ch = "a" → Output: false
function contain(str,ch){
    if(str.includes(ch)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
contain("anisha",'w');

//---------------------------------------------------------------------------------------

// Q43. Check if String Contains a Character (case-sensitive)
function containsChar(str, ch) {
  return str.includes(ch);
}

console.log(containsChar("hello", "e")); // true
console.log(containsChar("hello", "a")); // false
console.log(containsChar("JavaScript", "S")); // false

//---------------------------------------------------------------------

