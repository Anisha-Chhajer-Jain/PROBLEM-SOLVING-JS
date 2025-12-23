
// Q177. Count Strings with Length > 3
function countLongStrings(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3)
            count++;
    }

    return count;
}

