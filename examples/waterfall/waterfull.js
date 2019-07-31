window.onload = function () {
    let oMain = document.querySelector(".main");
    // 预加载图片
    let urls=[];
    for(let i=1;i <= 40;i++){
        let index =i;
        index = index < 10 ? "0"+index : index;
        let url = `images/img${index}.jpg`;
        urls.push(url);
    }
    preLoadImages(urls,function (oImages) {
        let oItems = createElement(oMain,oImages);
        let cols = resetWidth(oMain,oItems);
        waterfall(oItems,cols);
        window.onresize =throttle(function () {
            let oItems =document.querySelectorAll(".box");
            let cols = resetWidth(oMain,oItems);
            waterfall(oItems,cols);
        },500);
        loadImages(oMain,oItems);
    })

};

// 图片再加载
function loadImages(oMain,oItems) {
    window.onscroll = debounce(function () {
        let lastItem = oItems[oItems.length-1];
        let lastItemWidth = lastItem.offsetHeight / 2;
        let lastItemOffsetTop = lastItem.offsetTop;
        let scrollHeight = getWidth_Height().height + getPageScroll().y;

        console.log(lastItemWidth+lastItemOffsetTop);
        console.log(scrollHeight);
        if((lastItemWidth+lastItemOffsetTop) <= scrollHeight ){
            oItems = createElement(oMain);
            let cols = resetWidth(oMain,oItems);
            waterfall(oItems,cols);
        }
    },500);
}
// 瀑布流效果
function waterfall(oItems,cols) {
    let minHeightArr =[];
    for(let i=0;i<oItems.length;i++){
        let item =oItems[i];
        if(i <= cols){
            // 如果是第一行
            item.style.position ="";
            minHeightArr.push(item.offsetHeight);
        }else{
            // 如果不是第一行
            let minHeight = Math.min.apply(this,minHeightArr);
            let minIndex = minHeightArr.findIndex(function (value) {
                return value===minHeight;
            });
            let minOffsetLeft = oItems[minIndex].offsetLeft;
            // 设置当前图片位置
            item.style.position = "absolute";
            item.style.left = minOffsetLeft + "px";
            item.style.top = minHeight + "px";
            minHeightArr[minIndex]+= item.offsetHeight;
        }
    }
}

// 创建
function createElement(oMain,oImages) {
    for(let i=0 ;i < oImages.length ;i++){
        let oBox = document.createElement("div");
        oBox.className="box";
        // let oImg = document.createElement("img");
        // let index = i;
        // index = index < 10 ? "0"+index : index;
        // oImg.src=`images/img${index}.jpg`;
        oBox.appendChild(oImages[i]);
        oMain.appendChild(oBox);
    }
    let oBoxes = document.querySelectorAll(".box");
    return oBoxes;
}

// 居中显示、重新设置排版的宽
function resetWidth(oMain,oBox) {
    let screenWidth = getWidth_Height().width;
    let boxWidth = oBox[0].offsetWidth;
    let cols = Math.floor(screenWidth / boxWidth);
    oMain.style.width = boxWidth * cols +"px";
    oMain.style.margin ="0 auto";
    return cols;
}