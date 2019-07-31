window.onload = function () {

    let otoolbar = document.querySelector(".toolbar");
    let onav =document.querySelector(".nav");
    let oMenu = document.querySelector("#myMenu");
    let menuUp = document.querySelector(".menu-up");
    let menuDown = document.querySelector(".menu-down");
    let tips = document.querySelector(".tips");

    new fullpage('#fullpage', {
        sectionsColor:["#0f0","#00f","#ff0","#0ff","#fff","#f0f","#000"],
        verticalCentered: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage','sixthPage'],
        menu: '#myMenu',
        onLeave: function(origin, destination, direction){
            console.log(origin, destination, direction);
            if(destination.isFirst){
                // 第一屏
                otoolbar.style.display="block";
                onav.style.top="42px";
                oMenu.style.display="none";
            }
            else {
                // 不是第一屏
                otoolbar.style.display="none";
                onav.style.top="0px";
                oMenu.style.display="block";
            }
            // 最后一屏
            if(destination.isLast){
                tips.style.display="none";
            }
        },
    });

    // 切换屏幕
    menuUp.onclick= function () {
        fullpage_api.moveSectionUp();
    };
    menuDown.onclick= function () {
        fullpage_api.moveSectionDown();
    };

    // 第四屏图片移动
    ImageMoveAnimation();

    function ImageMoveAnimation() {
        let oItems = document.querySelectorAll(".section-four ul>li");
        let oImages= document.querySelectorAll(".section-four ul>li>img");
        let oH3 = document.querySelectorAll(".section-four ul>li>h3");

        for(let i= 0 ;i<oItems.length;i++){
            let item = oItems[i];
            item.onmouseenter = function () {
                oItems[0].style.width = "20%";
                oItems[1].style.width = "20%";
                oItems[2].style.width = "20%";
                oImages[i].style.opacity = "1";
                oH3[i].style.opacity= "0";
                this.style.width = "60%";
                if(i===0){
                    oImages[i].style.left = "0px";
                }else if(i===2){
                    oImages[i].style.right = "0px";
                }
            };
            item.onmouseleave = function () {
                oItems[0].style.width = "33%";
                oItems[1].style.width = "34%";
                oItems[2].style.width = "33%";
                oImages[0].style.left = "-180px";
                oImages[1].style.left = "-10%";
                oImages[2].style.right = "-180px";
                oImages[i].style.opacity = "0.3";
                oH3[i].style.opacity= "1";
            }
        }
    };
};