(function () {
    // 获取宽高（可视区域）
    function getWidth_Height(){
        let width,height;
        // 仅高级浏览器
        if(window.innerWidth){
            width = window.innerWidth;
            height = window.innerHeight;
        }
        // 混杂模式 / 怪异模式
        else if(document.compatMode === "BackCompat"){
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
    // 获取滚动距离
    function getPageScroll() {
        let x, y;
        if (window.pageXOffset) {
            x = window.pageXOffset;
            y = window.pageYOffset;
        }
        else if (document.compatMode === "BackCompat") {
            x = document.body.scrollLeft;
            y = document.body.scrollTop;
        }
        else {
            x = document.documentElement.scrollLeft;
            y = document.documentElement.scrollTop;
        }
        return {
            x: x,
            y: y
        }
    }
    // 判断事件获取方式
    function addEvent(ele, name, fn) {
        if(ele.attachEvent){
            ele.attachEvent("on"+name,fn);
        }
        else {
            ele.addEventListener(name,fn)
        }
    }
    // 判断样式获取方式
    function getStyleAttr(obj, name) {
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }
        else{
            return getComputedStyle(obj)[name];
        }
    }
    // 函数防抖
    function debounce(fn,delay) {
        let timer =null;
        return function () {
            timer && clearTimeout(timer);
            let args =arguments;
            let self =this;
            timer = setTimeout(function () {
                fn.apply(self,args);

            },delay || 1000)
        }
    }
    // 函数节流
    function throttle(fn,delay) {
        let timer =null;
        let flag = true;
        return function () {
            if(!flag) return;
            flag =false;
            timer && clearTimeout(timer);
            let args =arguments;
            let self =this;
            timer = setTimeout(function () {
                flag = true;
                fn.apply(self,args);

            },delay || 1000)
        }
    }

    // 预加载图片
    // 加载单张图片
    function preLoadImage(url, fn) {
        let oImg = document.createElement("img");
        oImg.src = url;
        oImg.onload =function () {
            fn(oImg);
        }
    }
    // 加载多张图片
    function preLoadImages(urls, fn) {
        let totleCount = urls.length;
        let count = 0;
        let oImages = [];
        for(let i=0;i<urls.length;i++){
            let url =urls[i];
            preLoadImage(url,function (oImg) {
                oImages.push(oImg);
                count++;
                if(count === totleCount){
                    fn(oImages);
                }
            })
        }
    }

    // 绑定
    window.getWidth_Height = getWidth_Height;
    window.getPageScroll = getPageScroll;
    window.addEvent = addEvent;
    window.getStyleAttr = getStyleAttr;
    window.debounce = debounce;
    window.throttle =throttle;
    window.preLoadImage =preLoadImage;
    window.preLoadImages =preLoadImages;
})();