////71.Remove Even Numbers (Keep Only Odd)
//----------------with given and an empty array-----push
let arr71 = [1, 2, 3, 4, 5];
let result = [];
for (let i = 0; i < arr71.length; i++) {
    if (arr71[i] % 2 == 0) {
        continue;
    }
    else {
        result.push(arr71[i]);
    }
}
console.log(result);
//---------------------------------------------with the given array------------------------------splice
for (let i = arr71.length - 1; i >= 0; i--) {
    if (arr71[i] % 2 === 0) {
        arr71.splice(i, 1);
    }
}
console.log(arr71);
//-------------------------------------------------- OR ---------------------------------------------------
let res71 = arr71.filter((value, index, array) => {
    // console.log(value);
    // console.log(index);
    // console.log(array);
    // return 0;
    return value % 2 != 0
})
console.log(res71);

