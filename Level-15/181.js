// Q181. Sum of Odd Numbers in Array...Return sum of only odd numbers.
function oddSum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            sum = sum + arr[i];
        }
    }
    console.log(sum);
}
oddSum([1,2,3,4,5,6]);

//--------------------------------------------------------------------

function sumOdd1(data){
    let sum = 0;
    let res=data.reduce((sum,num)=>{
        if(num%2!=0){
            return sum+num;
        }
        else{
            return sum;
        }
    },0)
    console.log(res);
}

sumOdd1([73,36,22,43,98,40]);