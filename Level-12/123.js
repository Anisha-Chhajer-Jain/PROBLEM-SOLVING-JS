function minOfThree(a, b, c) {
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
}



// Q123. Minimum of Three Numbers
// Input: a = 10, b = 10, c = 5 → Output: 5
function multi(a,b,c){
    if(a<b && a<c)
    console.log("a");
    else if(b<c)
    console.log("b");
    else
    console.log("c")
}
multi(5,8,7)