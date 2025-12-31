// Q199. Remove Consecutive Duplicate Characters
function removeConsecutiveDuplicates(str) {
    let result = str[0] || "";

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result += str[i];
        }
    }
    return result;
}
console.log(removeConsecutiveDuplicates("aaabbcddd")); // abcd


