
// Q179. Remove Empty Strings
function removeEmptyStrings(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "")
            res.push(arr[i]);
    }

console.log(res);
}
removeEmptyStrings(["anisha","","dancee"])

//----------------------------- BY SPLICE ------------------------------

function removeEmptyStrings(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "") {
            arr.splice(i, 1);
        }
    }
    console.log(arr);
}

removeEmptyStrings(["anisha", "", "dancee"]);

//------------------------------- BY SIR ------------------------------------

function removeEmptyStrings(arr) {
    for (let i = 0;i<arr.length; i++) {
        if (arr[i] == "") {
            arr.splice(i, 1);
            i=i-1
        }
    }
    console.log(arr);
}

removeEmptyStrings(["anisha", "", "dancee"]);

//--------------------- IN CLASS-BY SIR(KHUSH) -------------------------

function removeEmptyStrings(arr) {
    for (let i = 0;i<arr.length;) {
        if (arr[i] == "") {
            arr.splice(i, 1);
        }
        else{
            i++;
        }
    }
    console.log(arr);
}

removeEmptyStrings(["anisha", "", "dancee"]);

//------------------------------- BY FILTER -------------------------------

function removeEmptyStrings(arr) {
    let res = arr.filter(item => item !== "");
    console.log(res);
}

removeEmptyStrings(["anisha", "", "dancee"]);
