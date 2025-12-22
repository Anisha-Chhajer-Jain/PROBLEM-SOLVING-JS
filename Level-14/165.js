//165.
function hasEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0)
            console.log(true);
    }
    console.log(false);
}
hasEven([2, 3, 4]);

//-----------------------------------------------------------------------------------------------

function atleastOneEven(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 == 0) {
            console.log("Even");
            return;
        }
}
console.log("Contains all odd elements");
valueCount([6, 2, 8, 10]);