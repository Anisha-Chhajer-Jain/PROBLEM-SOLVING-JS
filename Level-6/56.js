// Q56. Count Odd Numbers in Array
// Input: [7, 9] → Output: 2
function haha(num){
    let c=0;
    for(let i=0;i<num.length;i++){
      if(num[i]%2!=0)
      c++;
    }
    console.log(c);
}
haha([1,2,3,8,6]);
