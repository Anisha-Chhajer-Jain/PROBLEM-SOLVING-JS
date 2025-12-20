// Q153. Contains Any Vowel
//---------------------------------------- BEST WAY TO DO  -----------------------------------------------------
function checkVowel(str){
    let checkstr = "aeiou";
    for(let i=0;i<str.length;i++){
        if(checkstr.includes(str[i])){
            console.log(true);
            return;
        }
    }
}
checkVowel("hello");

//--------------------------------------------------------------------------------------

// function hasVowel(str) {
//     const vowels = new Set(["a","e","i","o","u"]);
//     for (let ch of str.toLowerCase()) {
//         if (vowels.has(ch)) return true;
//     }
//     return false;
// }

//-------------------------------------------------------------------------------------------------------


// function hasVowel(str) {
//     console.log(/[aeiou]/i.test(str));
// }
// hasVowel("anisha");