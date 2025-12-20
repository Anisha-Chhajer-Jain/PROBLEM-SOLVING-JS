// Q148. First Word of Sentence

function firstWord(str) {
    console.log(str.split(" ")[0]);
}
firstWord("anisha is sleepy")

//--------------------------------------------   FOR LOOP   ---------------------------------------------------

function firstWord(str) {
    str = str.trim();
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") break;
        word += str[i];
    }
    console.log(word);
}
firstWord("anisha is sleepy");

//------------------------------------------------------------------------------------------------------------

function firstWord(str) {
    let res = str.trim().split(" ");
    console.log(res[0])
}
firstWord(" Hello World")

//------------------------------------------------------------------------------------------------------------

function firstWord(str) {
    let res = "";
    let check = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            check = true;
            res = res + str[i];
        }
        else if (check == true && str[i] == " ") {
            break;
        }
    }
    console.log(res)
}
firstWord("Hello World")



