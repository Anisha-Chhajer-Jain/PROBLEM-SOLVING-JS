//Q200. Remove Consecutive Duplicates in Array
function removeConsecutiveDuplicatesArray(arr) {
    if (arr.length === 0) return [];

    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeConsecutiveDuplicatesArray([1,1,2,2,2,3,1,1])); // [1,2,3,1]
