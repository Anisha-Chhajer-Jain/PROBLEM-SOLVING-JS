function absoluteArray(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(Math.abs(arr[i]));
    }
    console.log(res);
}
absoluteArray([-3]);


//----------------------------------------------------------------------------------------------------

function absoluteArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            res.push(-arr[i]);
        else
            res.push(arr[i]);
    }
    console.log(res);
}
absoluteArray([-3]);
