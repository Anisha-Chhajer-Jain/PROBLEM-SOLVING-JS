
////72.
let arr = [1, 2, 2, 3, 3, 3];
let dupli = [];
for (let i = 0; i < arr.length; i++) {
    let check = false;

    for (let j = 0; j < dupli.length; j++) {
        if (arr[i] === dupli[j]) {
            check = true;
            break;
        }
    }
    if (!check) dupli.push(arr[i]);
}
console.log(dupli);
//-------------------------------------------------------------------------------------------------
let dupli1 = [];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
        obj[arr[i]] = true;
        dupli.push(arr[i]);
    }
}
console.log(dupli);
//--------------------------------------------------------------------------------------------------
let res = [];
let obj1 = {};
for (let i = 0; i < arr.length; i++) {
    if (obj1[arr[i]]) {
        obj1[arr[i]]++
    }
    else {
        obj1[arr[i]] = 1;
    }
}
for (let char in obj1) {
    res.push(Number(char));
}
console.log(res)
//----------------------------------------------- OR ---------------------------------------------------------
let res1 = [];
for (let i = 0; i < arr.length; i++) {
    let notpresent = true;
    for (let j = 0; j < res1.length; j++) {
        if (arr[i] == res[j]) {
            notpresent = false;
            break;
        }
    }
    if (notpresent == true) {
        res1.push(arr[i]);
    }
}
console.log(res1)
//----------------------------set is the data structure that stores unique code-----------------------------
let res2 = new Set(arr);
console.log(res2);
console.log([...res2]);
let dupli2 = [];
for (let i = 0; i < arr.length; i++) {
    let check = false;

    for (let j = 0; j < dupli2.length; j++) {
        if (arr[i] === dupli2[j]) {
            check = true;
            break;
        }
    }
    if (!check) dupli2.push(arr[i]);
}
console.log(dupli2);

