// Q154. Contains Only Digits

function checkDigit(str){
    let checkstr = "123456789";
    for(let i=0;i<str.length;i++){
        if(checkstr.includes(str[i])){
            console.log(true);
            return;
        }
    }
}
checkDigit("1233432");
