
// Q171. Unique Elements (No Set)

function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let have = true;
        for (let j = 0; j < res.length; j++) {
            if (arr[i] == res[j]) {
                have = false;
            }
        }
        if (have) {
            res.push(str[i]);
        }
    }
    console.log(res);
}
unique([1, 2, 3, 3, 3])

//--------------------------------------------------------------------------------------------------------

// function uniqueArray(arr) {
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         let found = false;

//         for (let j = 0; j < res.length; j++) {
//             if (arr[i] === res[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) res.push(arr[i]);
//     }
//     console.log(res);
// }
// uniqueArray([1, 3, 4, 5, 2]);

