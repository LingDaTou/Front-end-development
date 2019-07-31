window.onload = function () {
    let oNav = document.querySelector(".nav");
    let oNav2 = document.querySelector(".nav2");
    let navHeight = oNav.offsetHeight;
    console.log(oNav2.offsetHeight);
    console.log(navHeight);
    window.onscroll =  function () {
        let offsetY = getPageScroll().y;
        if(offsetY >= navHeight){
            oNav2.style.top="0px";
        }
        else{
            oNav2.style.top="-100px";
        }
    }
}