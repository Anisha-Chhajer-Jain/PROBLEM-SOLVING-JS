// Q156. Repeat Each Character Twice

function repeatTwice(str) {
    let res = "";
    for (let ch of str){
        res += ch + ch;
    }
    console.log(res);
}
repeatTwice("Hello");
