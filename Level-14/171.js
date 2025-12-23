
// Q171. Unique Elements (No Set)
function uniqueArray(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                found = true;
                break;
            }
        }

        if (!found) res.push(arr[i]);
    }

    return res;
}

