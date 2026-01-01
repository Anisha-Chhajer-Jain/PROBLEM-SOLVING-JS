// //75. Rotate Array Right by 1
let arr5 = [1, 2, 3, 4];
let rotate0 = [];
if (arr5.length > 0) {
    rotate0.push(arr5[arr5.length - 1]);

    for (let i = 0; i < arr5.length - 1; i++) {
        rotate0.push(arr5[i]);
    }
}
console.log(rotate0);
//----------------------------------------------- OR ---------------------------------------------------------
let rotate1 = [55, 84, 93, 49, 89, 87];
let res3 = [];
res3 = [rotate1[rotate1.length - 1]];
for (let i = 0; i < rotate1.length - 1; i++) {
    res.push(rotate1[i]);
}
console.log(res3);
//----------------------------------------------- OR ---------------------------------------------------------
let temp2 = rotate2[rotate.length - 1];
for (let i = rotate2.length - 1; i > 0; i--) {
    rotate2[i] = rotate2[i - 1];
}
rotate2[0] = temp2;
console.log(rotate2)

