var sen = "i ate an apple today"

sen = sen.toLowerCase()
var new_sen = ''
for(i=0 ; i<sen.length ; i++){
    if(sen[i] == 'a'){
        new_sen = new_sen + 'e'
    }
    else{
        new_sen = new_sen + sen[i];
    }
}
console.log(new_sen)