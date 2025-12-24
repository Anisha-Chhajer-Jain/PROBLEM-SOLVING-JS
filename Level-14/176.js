// Q176. Elements at Odd Indices
function oddIndexElements(arr) {
    let res = [];

    for (let i = 1; i < arr.length; i += 2) {
        res.push(arr[i]);
    }

    console.log(res);
}
oddIndexElements([1,2,3,5,7,8]);