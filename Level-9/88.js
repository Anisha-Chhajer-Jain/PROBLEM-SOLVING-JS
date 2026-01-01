
// Q88. Armstrong Number (3-digit)
// Number is Armstrong if sum of cubes of its digits equals the number (for 3-digit).
// Input: 153 → 1³ + 5³ + 3³ = 153 → Output: true

let number = 153;
let arr88 = String(number).split("");
let res = arr88.reduce((current, value) => {
  return Number(current) + Number(value) ** arr88.length;
})
if (res == number) {
  console.log("Armstrong");
}
else {
  console.log("Not Armstrong")
}

