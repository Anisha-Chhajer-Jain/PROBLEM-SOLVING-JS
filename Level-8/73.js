

// 73. Concatenate Two Arrays

let a = [1, 2];
let b = [3, 4];
let merged = [];
for (let i = 0; i < a.length; i++) {
    merged.push(a[i]);
}
for (let i = 0; i < b.length; i++) {
    merged.push(b[i]);
}
console.log(merged);
// //--------------------------------------------------by spread-----------------------------------------------
let merged1 = [...a, ...b];
console.log(merged1);
// //-------------------------------------------------by concat------------------------------------------------
let merged2 = a.concat(b);
console.log(merged2);

