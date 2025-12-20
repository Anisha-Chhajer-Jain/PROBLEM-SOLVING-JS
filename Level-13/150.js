// Q150. Length of Longest Word

function longestWordLength(str) {
    let words = str.split(" ");
    let max = 0;
    for (let w of words) max = Math.max(max, w.length);
    console.log(max);
}
longestWordLength("I am attracting money,luxuxy & peace in my life");

//-----------------------------------------------   BY SIR   ---------------------------------------------------

function longestWord(str) {
    let count = 0;
    res = [];
    for (let i = 0; i < str.length; i++) {
        if (i == str.length - 1 && str[i] != " ") {
            count++
            res.push(count)
        }
        else if (str[i] != " ") {
            count++
        }
        else if (count > 0) {
            res.push(count);
            count = 0;
        }
    }
    console.log(res);
}
longestWord("HELLO This is the problem solving class with javascript")

//-------------------------------------------------------------------------------------------------------------
function longestWord(str) {
    let count = 0;
    res = []
    for (let i = 0; i < str.length; i++) {
        if (i == str.length - 1 && str[i] != " ") {
            count++
            res.push(count)
        }
        else if (str[i] != " ") {
            count++
        }
        else if (count > 0)
            res.push(count);
        count = 0;
    }
}


