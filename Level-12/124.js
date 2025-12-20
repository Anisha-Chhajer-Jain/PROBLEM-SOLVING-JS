//124.PRINT FROM N TO DOWN 1

function printDown(n) {
    let result = "";
    for (let i = n; i >= 1; i--) {
        result += i + " ";
    }
    console.log(result);
}
printDown(10)