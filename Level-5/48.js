
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

