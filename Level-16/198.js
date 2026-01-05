// Q198. First Repeating Character
function firstRepeating(str) {
    let seen = new Set();

    for (let ch of str) {
        if (seen.has(ch)) return ch;
        seen.add(ch);
    }
    return null;
}
console.log(firstRepeating("swiss")); // s


function firstRepeating(str) {
    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < str.length; j++) {
            if (i == j) {
                continue;
            }
            else if (str[i] == str[j]) {
                console.log(str[i]);
                return
            }
        }
    }
    console.log("Every element is unique")
}
firstRepeating("abc");
