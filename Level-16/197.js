// Q197. First Non-Repeating Character
function firstNonRepeating(str) {
    let freq = {};

    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of str) {
        if (freq[ch] === 1) return ch;
    }
    return null;
}
console.log(firstNonRepeating("swiss")); // w
