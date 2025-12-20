// Q149. Last Word of Sentence

function lastWord(str) {
    let words = str.split(" ");
    console.log(words[words.length - 1]);
}
lastWord("i love travelling")

//---------------------------------------------  FOR LOOP  ---------------------------------------------------

function lastWord(str) {
    let res = "";
    let check = false;
    for (let i = str.length; i > 0; i++) {
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
lastWord("Hello World");