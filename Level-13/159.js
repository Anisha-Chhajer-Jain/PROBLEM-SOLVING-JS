// Q159. Anagram Check

function isAnagram(a, b) {
    let clean = s => s.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
    return clean(a) === clean(b);
}

//--------------------------------------------------------------------------------------------------

function anagram(str1,str2){

console.log(str1.split(" ").sort().join() == str2.trim().split(" ").sort(). join());
}
anagram("Hello World", "Hello World");

//---------------------------------------------------------------------------------------------------------

function anagram(str1,str2){
let check1=str1.split("").join().split("").sort().join("")
let check2=str2.split("").join().split("").sort().join('')
console.log(check1);
console.log(check2);
}
anagram("hahah","hahaha")

//---------------------------------------------------------------------------------------------------------------

function anagram(str1, str2) {
    let cleanStr1 = str1.split(" ").join("").toLowerCase();
    let cleanStr2 = str2.split(" ").join("").toLowerCase();
    if (cleanStr1.length !== cleanStr2.length) {
        console.log(false);
        return false;
    }

    let obj1 = {};
    let obj2 = {};
    for (let char of cleanStr1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }

    for (let char of cleanStr2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}
anagram("World Hello ", "Hello World");

//------------------------------------------------------------------------------------------------------------
// function anagram(str1,str2){
// let obj2=(};
// for(let char of str1){
// if(char == " "){
// continue;
// }
// else if(obj1[char]){
// obj1[char]++
// }
// else{
// obj1[char]=1;
// }
// for(let char of str2){
// if(chaif == " "){
// continue;
// }
// else if(obj2[char]){
// obj2[char]++
// }
// else{
// obj2[char]=1;
// }
// for(let char in obj1){
// if(obj1[char] != obj2[char]){
// console.log("Not a anagram");
// return;
// }
// console.log("Anagram")
// }
// anagram("Hello World

// ","WorldHello
// )