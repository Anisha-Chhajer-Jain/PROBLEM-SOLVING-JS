// Q59. Print Elements Greater than 10
// Input: [10, 11, 9] → Output: 11
function haha(num){
    let c=0;
    for(let i=0;i<num.length;i++){
      if(num[i]>10)
      c++;
    }
    console.log(c);
}
haha([1,2,3,18,-6,-9]);
