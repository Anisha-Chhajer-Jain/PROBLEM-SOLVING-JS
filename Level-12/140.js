//140.Automorphic number:-if its square ends with the same digits as the number.
//5^2=25 (correct hai)

function isAutomorphic(n) {
    let square = n * n;
    return square.toString().endsWith(n.toString());
}

console.log(isAutomorphic(5));


//------------------------------------------------------------------------------------


function automorphic(n) {
    let length = String(n).length;
    square = n * n;
    if (square % 10 ** length == n) {  //so that for no. greater than 2 digit can be checked,
    // such that for 4 digit no. it extracts the last 2 digits of that and checks with that 
    //eg:-25=3025--->length 2 then last meh we get 25 so "TRUE" (%100-->DIVIDE BY 100-->TO GET LAST 2 DIGITS)
        console.log(true);
    }
    else {
        console.log(false)
    }
}
automorphic(5);