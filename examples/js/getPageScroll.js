function getPageScroll() {
    let x,y;
    if(window.pageXOffset){
        x = window.pageXOffset;
        y = window.pageYOffset;
    }
    else if(document.compatMode){
        x = document.body.scrollLeft;
        y = document.body.scrollTop;
    }
    else{
        x = document.documentElement.scrollLeft;
        y = document.documentElement.scrollTop;
    }
    return {
        x:x,
        y:y
    }
}