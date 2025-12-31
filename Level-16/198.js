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


