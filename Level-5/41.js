// Q41. Count Words in a Sentence
// Input: "JavaScript is fun" → Output: 3
function count(str){
    let c=1;
    str=str.trim();    //remove trailing spaces
    for(let i=0;i<str.length-1;i++){
        if(str[i]==" ")
        c++;
    }
    console.log(c);
}
count("JavaScript is fun");


// Q41. Count Words in a Sentence
function countWords(str) {
  return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello world"));          
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