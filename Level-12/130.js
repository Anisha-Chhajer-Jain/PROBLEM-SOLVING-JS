//Q130. Co-prime Numbers

function isCoprime(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a === 1;
}
console.log(isCoprime(3, 5))

//---------------------------------------------------------------------------------------------


function CoPrime(n1, n2) {
    let range = Math.min(n1, n2);
    let GCD = 1;
    for (let i = range; i >= 1; i--) {
        if (n1 % i == 0 && n2 % i == 0) {
            GCD = i;
            break;
        }
    }
    console.log(GCD == 1)
}
CoPrime(12, 18);



// Q130. Co-prime Numbers
// Input: a = 7, b = 9 → GCD = 1 → Output: true
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}