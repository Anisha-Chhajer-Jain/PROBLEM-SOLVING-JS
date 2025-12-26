//--------------------------------- BY SIR --------------------------------------
function rotatek(arr, k) {
    let res = [];
    let n = arr.length;
    if (k > n) {
        k = k % n
    }
    for (let i = arr.length - k; i < arr.length; i++) {
        res.push(arr[i]);
    }
    for (let i = 0; i < arr.length - k; i++) {
        res.push(arr[i]);
    }
    console.log(res);
}
rotatek([1, 2, 3, 4, 5], 2);

//---------------------------- POP & SHIFT --------------------------pura for loop chalke hoga so less optimized
function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n;

    for (let i = 0; i < k; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}
console.log(rotateRight([1, 2, 3, 4, 5], 1));

//-----------------------------------------------------------------------------------
function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n;
    return arr.slice(n - k).concat(arr.slice(0, n - k));
}
console.log(rotateRight([1, 2, 3, 4, 5], 1));