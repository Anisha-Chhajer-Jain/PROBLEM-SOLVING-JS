// Q171. Unique Elements (No Set)

function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let have = true;
        for (let j = 0; j < res.length; j++) {
            if (arr[i] == res[j]) {
                have = false;
            }
        }
        if (have) {
            res.push(str[i]);
        }
    }
    console.log(res);
}
unique([1, 2, 3, 3, 3])

//--------------------------------------- WITH OBJECTS -----------------------------------------------------

function unique(arr) {
    let seen = {};
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            res.push(arr[i]);
        }
    }
    console.log(res);
}

unique([1, 2, 3, 3, 3]);

//--------------------------------------------- BY SIR  ----------------------------------------------------

function unique(arr) {
    res = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        }
        else{
            obj[arr[i]] = 1;
    }
}
for (let keys in obj) {
    res.push(Number(keys));
}
    console.log(res);
}
unique([1, 2, 2, 3, 3, 3]);
