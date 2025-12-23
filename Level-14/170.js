
// Q170. Contains Any Duplicate?

function hasDuplicate(arr) {
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            console.log(true);
            return;
        }
        seen[arr[i]] = true;
    }
    console.log(false);
}
hasDuplicate([1, 2, 3, 2]);

//---------------------------------------- NORMAL METHOD SE ------------------------------------------------

function duplicates(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            console.log(true);
            return;
        }
    }
    console.log(false);
}
duplicates([1, 3, 6, 1, 5]);

//--------------------------------------- SELF-MAYBE GALAT ------------------------------------------------

function hasDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                console.log(true);
        }
    }
    console.log(false);
}
hasDuplicate([1, 2, 3, 2]);

