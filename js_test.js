var str = readline();

function getNum(str) {
    var obj ={};
    for(let i=0;i<str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]]=1
        }
        else{
            obj[str[i]]++;
        }
    }
    let keysLen = Object.keys(obj).length;
    if(keysLen===1){
        return 1;
    }
    else{
        if(keysLen === str.length || keysLen > 2){
            return 0
        }
        return Math.pow(keysLen,2)-Math.pow(2,keysLen-1);
    }
}

console.log(getNum(str));
