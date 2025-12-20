// Q155. Contains Only Letters

function checkLetter(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            console.log(true);
            return;
        }
    }
    console.log(false);
}
checkLetter("Anisha");
