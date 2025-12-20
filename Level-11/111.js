// Q111. Longer of Two Strings

let s1 = "hi";
let s2 = "hello";
let longer = s1.length >= s2.length ? s1 : s2;
console.log(longer); 

//--------------------------------------------------------------------------------------------------------

function longerString(str1, str2) {
    if (str1.length >= str2.length) {
        return str1;
    }
    return str2;
}

console.log(longerString("anisha","prashant"));      

