function getWidth_Height(){
    let width,height;
    // 仅高级浏览器
    if(window.innerWidth){
        width = window.innerWidth;
        height = window.innerHeight;
    }
    // 混杂模式 / 怪异模式
    else if(document.compatMode){
        width  = document.body.clientWidth;
        height = document.body.clientHeight;
    }
    // 兼容低级浏览器
    else {
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
    }
    return {
        width:width,
        height:height
    }
}