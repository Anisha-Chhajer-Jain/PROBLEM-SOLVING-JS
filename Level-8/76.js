
// //76. Rotate Array Left by 1

let arr6 = [1, 2, 3, 4];
let rotated = [];
if (arr6.length > 0) {
    for (let i = 1; i < arr6.length; i++) {
        rotated.push(arr6[i]);
    }
    rotated.push(arr6[0]);
}
console.log(rotated);
//-------------------------------------------- OR -------------------------------------------------------
let rotate = [55, 84, 93, 49, 89, 87];
let res4 = [];
let temp = rotate[0];
for (let i = 1; i < rotate.length - 1; i++) {
    res4.push(rotate[i]);
}
res4.push(temp);
console.log(res4);



