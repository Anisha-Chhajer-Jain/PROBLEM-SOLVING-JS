// Q173. Move All Negatives to Front
function moveNegatives(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++)
        if (arr[i] < 0) res.push(arr[i]);

    for (let i = 0; i < arr.length; i++)
        if (arr[i] >= 0) res.push(arr[i]);

    console.log(res);
}
moveNegatives([1,2,3])