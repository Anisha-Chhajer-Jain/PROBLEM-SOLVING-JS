// Q81. Square Pattern of * of Size N
// For N = 3:
// * * *
// * * *
// * * *


for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

