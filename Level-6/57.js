
// Q57. Print Only Positive Numbers
// Input: [-1, 0, 5, 3, -2] → Output: 5 3
function haha(num){
    let c=0;
    for(let i=0;i<num.length;i++){
      if(num[i]>0)
      c++;
    }
    console.log(c);
}
haha([1,2,3,8,-6,-9]);
