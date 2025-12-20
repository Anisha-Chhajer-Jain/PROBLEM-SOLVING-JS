// Q160. Pangram Check

function isPangram(str) {
    let letters = new Set(str.toLowerCase().replace(/[^a-z]/g, ""));
    return letters.size === 26;
}