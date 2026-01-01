
//// 80. Separate Even and Odd into Two Arrays

let arr80 = [1, 2, 3, 4, 5];
let evens = [];
let odds = [];
for (let i = 0; i < arr80.length; i++) {
    if (arr80[i] % 2 === 0) {
        evens.push(arr80[i]);
    }
    else {
        odds.push(arr80[i]);
    }
}
console.log("evens =", evens);
console.log("odds =", odds);
//---------------------------------------------- OR ---------------------------------------------------
let arr10 = [12, 8, 9, 7, 3, 4];

let even = arr10.filter((value) => {
    return value % 2 == 0;
})
let odd = arr10.filter((value) => {
    return value % 2 != 0;
})
console.log(even);
console.log(odd);



