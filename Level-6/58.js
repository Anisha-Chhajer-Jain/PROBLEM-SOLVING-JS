
// Q58. Print Only Negative Numbers
// Input: [-5, -2] → Output: -5 -2
function haha(num){
    let c=0;
    for(let i=0;i<num.length;i++){
      if(num[i]<0)
      c++;
    }
    console.log(c);
}
haha([1,2,3,8,-6,-9]);
