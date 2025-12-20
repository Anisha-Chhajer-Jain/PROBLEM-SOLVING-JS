// Q159. Anagram Check

function isAnagram(a, b) {
    let clean = s => s.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
    return clean(a) === clean(b);
}
