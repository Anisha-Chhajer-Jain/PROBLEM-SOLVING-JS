// Q178. First Character of Each String
function firstCharacters(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i][0]);
    }
    console.log(res);
}
firstCharacters(["Ice","lemon","yoyooo"])