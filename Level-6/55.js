// Q55. Count Even Numbers in Array
// Input: [2, 4, 8] → Output: 3
function haha(num){
    let c=0;
    for(let i=0;i<num.length;i++){
      if(num[i]%2==0)
      c++;
    }
    console.log(c);
}
haha([1,2,3,8,6]);


