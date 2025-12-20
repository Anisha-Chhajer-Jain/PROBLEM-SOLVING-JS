// Q146. Replace All '?' with '!'

function replaceQuestion(str) {
    return str.replace(/\?/g, '!');
}
//--------------------------------------------------------------------------------------------

function replace(str) {
    // let res=str.replaceA11("?","!");
    // console.log(res)
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "?") {
            res += "!"
        }
        else {
            res += str[i];
        }
    }
        console.log(res)
    }
    replace("Hello ???? ")