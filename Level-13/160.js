// Q160. Pangram Check

// function isPangram(str) {
//     let letters = new Set(str.toLowerCase().replace(/[^a-z]/g, ""));
//     return letters.size === 26;
// }

//--------------------------------------------  USING CHARCODEAT  ------------------------------------------

// function isPangram(str) {
//     str = str.toLowerCase();
//     for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {
//         if (!str.includes(String.fromCharCode(ch))) {
//             console.log(false);
//         }
//     }
//     console.log(true);
// }
// isPangram("The quick brown fox jumps over a lazy dog")
// isPangram("Hello World!!")


//---------------------------------------------  BY SIR -----------------------------------------------------

function pangram(str) {
    let arr = str.toLowerCase().split("").sort();
    let ascii = 97;
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i].charCodeAt();
        if (ascii == check) {
            ascii++;
        }
    }
    console.log(ascii >= 123 ? true : false);
}
pangram("The quick brown fox jumps over a lazy dog")






function pangram(str){
let checkStr="qwertyuiopasdfghjklzxcvbnm";
str=str.toLowerCase();
for(let i=0;i<checkStr.length;i++){
if(!(str.includes(checkStr[i]))){
console.log(false);
return;
}
}
console.log(true);
}
pangram("The quick brown fox jumps over a lazy dog")


