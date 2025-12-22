// function countSign(arr) {
    // let pos = 0, neg = 0, zero = 0;
    // for (let n of arr) {
    //     if (n > 0) pos++;
    //     else if (n < 0) neg++;
    //     else zero++;
    // }
    // return { pos, neg, zero };
// }

//-------------------------------------------------------------------------------------------------------

// function countPNZ(arr) {
//     let pos = 0, neg = 0, zero = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) pos++;
//         else if (arr[i] < 0) neg++;
//         else zero++;
//     }

//     return { pos, neg, zero };
// }

//-------------------------------------------------------------------------------------------------

function valueCount(arr) {
    let possitiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            possitiveCount++
        }
        else if (arr[i] == 0) {
            zeroCount++
        }
        else {
            negativeCount++;
        }
    }
    console.log("Positive Count :",possitiveCount);
    console.log("Negative Count :",negativeCount);
    console.log("Zero Count :",zeroCount);
}
valueCount([3, 6, 3, 3, 2, 7, 0, 0, 0, 0, -1, -2, -4, -89, -78]);