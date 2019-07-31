function addEvent(ele, name, fn) {
    if(ele.attachEvent){
        ele.attachEvent("on"+name,fn);
    }
    else {
        ele.addEventListener(name,fn)
    }
}