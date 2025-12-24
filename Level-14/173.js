// Q173. Move All Negatives to Front
function moveNegatives(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++)
        if (arr[i] < 0) res.push(arr[i]);

    for (let i = 0; i < arr.length; i++)
        if (arr[i] >= 0) res.push(arr[i]);

    console.log(res);
}
moveNegatives([1, 2, 3])

//------------------------------------------ BY SIR(SWAPPING) ----------------------------------------------

function unique(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    console.log(arr)
}
unique([1, -2, 3, -4, 0]);