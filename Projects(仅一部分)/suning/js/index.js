window.onload= function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,

        pagination: {
            el: '.swiper-pagination',
            bulletClass : 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // let bannerCenter = document.querySelector(".banner-center");
    // let navigator = document.querySelectorAll(".navigator");
    // navigator.forEach(function (ele, index) {
    //     bannerCenter.onmouseenter =function(){
    //         ele.style.display="block";
    //     };
    //     bannerCenter.onmouseleave =function(){
    //         ele.style.display="none";
    //     };
    // })
    $(".navigator").each(function (index, ele) {
        $(".banner-center").mouseenter(function () {
            ele.style.display="block";
        })
        $(".banner-center").mouseleave(function () {
            ele.style.display="none";
        })
    });

    let sideMsg = document.querySelector(".sidebar .msg");
    sideMsg.onmouseenter = function () {

        var cNode = this.cloneNode(true);
        this.style.position="relative";

        cNode.style.position = "absolute";
        cNode.style.left = "-100%";
        cNode.style.top=0;
        cNode.style.width = this.offsetWidth+"px";
        cNode.style.height = this.offsetHeight+"px";
        cNode.style.background = getComputedStyle(this.firstChild).background;
        cNode.style.textAlign ="center";
        cNode.style.lineHeight = this.offsetHeight+"px";
        cNode.innerText= "消息";
        cNode.className ="cloneMsg";
        this.appendChild(cNode);
    };
    sideMsg.onmouseleave = function () {
        let cloneMsg = document.querySelector(".cloneMsg");
        cloneMsg.parentNode.removeChild(cloneMsg);
    }
}