// Q42. Replace All 'a' with 'e'
// Input: "cat" → Output: "cet"

function replace(str){
       str=str.replaceAll('a','e')
    console.log(str)
}
replace("anisha");

//.......................................................................
function replace(str){
    for(let i=0;i<str.length-1;i++){
       if(str[i]=='a')
       str=str.replaceAll('a','e')
    }
    console.log(str)
}
replace("cata");

//------------------------------------------------

function replace(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            result += 'e';
        } else {
            result += str[i];
        }
    }

    console.log(result);
}

replace("banana"); // benene

//------------------------------------------------

// Q42. Replace All 'a' with 'e'
function replaceA(str) {
  return str.replace(/a/g, "e");
}

console.log(replaceA("banana")); // benene
console.log(replaceA("apple"));  // epple
console.log(replaceA("cat"));    // cet
// ----------------------------------------------------
var sen = "i ate an apple today"

sen = sen.toLowerCase().replaceAll('a','e')
console.log(sen)


//--------------------------------------------------------------

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