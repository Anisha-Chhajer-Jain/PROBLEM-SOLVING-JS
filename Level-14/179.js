
// Q179. Remove Empty Strings
function removeEmptyStrings(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "")
            res.push(arr[i]);
    }

console.log(res);
}
removeEmptyStrings(["anisha","","dancee"])

