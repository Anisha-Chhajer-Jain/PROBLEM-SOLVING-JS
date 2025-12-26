function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n;
    return arr.slice(n - k).concat(arr.slice(0, n - k));
}
console.log(rotateRight([1,2,3,4,5], 1)); 

//-------------------------------------------------------------------

function rotateRight(arr, k) {
    let n = arr.length;
    k = k % n;

    for (let i = 0; i < k; i++) {
        let last = arr.pop();   
        arr.unshift(last);      
    }
    return arr;
}
console.log(rotateRight([1,2,3,4,5], 1)); 
