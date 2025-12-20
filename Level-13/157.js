// Q157. Remove Special Characters

function removeSpecialChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if ((ch >= 'a' && ch <= 'z') ||(ch >= 'A' && ch <= 'Z')){
            result += ch;
        }
    }
    return result;
}

console.log(removeSpecialChars("hahaah!!!!"));

//-------------------------------------------- USING charCodeAt() ---------------------------------------------

function removeSpecialChars(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)){
            res += str[i];
        }
    }
    return res;
}
console.log(removeSpecialChars("Anishajiii!!!@@@"));