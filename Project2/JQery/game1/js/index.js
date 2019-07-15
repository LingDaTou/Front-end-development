$(function () {
    // 游戏规则事件
    $(".rules").click(function () {
        $(".rule").stop().fadeIn(100);
    });
    $(".close").click(function () {
        $(".rule").stop().fadeOut(100);
    });

    // 开始游戏事件
    $(".start").click(function () {
        // 处理进度条
        $(this).stop().fadeOut(100);
        progressHandler();
        startWolfAnimation();

    });
    // 重新开始
    $(".reStart").click(function () {
        $(".mask").stop().fadeOut(100);
        progressHandler();
        startWolfAnimation();
    });

    // 图片
    var wolf_1=['./images/h0.png','./images/h1.png','./images/h2.png','./images/h3.png','./images/h4.png','./images/h5.png','./images/h6.png','./images/h7.png','./images/h8.png','./images/h9.png'];
    var wolf_2=['./images/x0.png','./images/x1.png','./images/x2.png','./images/x3.png','./images/x4.png','./images/x5.png','./images/x6.png','./images/x7.png','./images/x8.png','./images/x9.png'];
    // 定义一个数组保存所有可能出现的位置
    var arrPos = [
        {left:"100px",top:"115px"},
        {left:"20px",top:"160px"},
        {left:"190px",top:"142px"},
        {left:"105px",top:"193px"},
        {left:"19px",top:"221px"},
        {left:"202px",top:"212px"},
        {left:"120px",top:"275px"},
        {left:"30px",top:"295px"},
        {left:"209px",top:"297px"}
    ];
    var timer =null;

    // 创建图片并开始动画
    function startWolfAnimation() {
        let positionIndex = Math.round(Math.random()*8);
        let wolf = Math.round(Math.random())===0 ? wolf_1 :wolf_2;
        window.wolfIndex = 0;
        window.wolfIndexEnd = 5;
        let wolfImage = $("<img src='' class='wolf'> ");
        wolfImage.css({
            position: "absolute",
            left: arrPos[positionIndex].left,
            top: arrPos[positionIndex].top
        });
        timer = setInterval(function () {
            if(wolfIndex > wolfIndexEnd){
                $(".wolf").remove();
                clearInterval(timer);
                startWolfAnimation();
            }
            wolfImage.attr("src",wolf[wolfIndex]);
            wolfIndex++;
        },2000);
        // 添加

        $(".container").append(wolfImage);

        gameRules(wolfImage);
    }

    function gameRules(wolfImage) {
        wolfImage.one("click",function () {
            window.wolfIndex=5;
            window.wolfIndexEnd=9;
            let $src = $(this).attr("src");
            let flag = $src.indexOf("h") >= -1;
            if(flag){
                $('.score').text(parseInt($('.score').text())+10);
            }
            else{
                $('.score').text(parseInt($('.score').text())-10);
            }

        })
    }


    // 结束动画
    function stopWolfAnimation() {
        $(".wolf").remove();
        clearInterval(timer);
    }

    // 进度条处理
    function progressHandler() {
        $(".progress").css({width: 180});
        let timer =setInterval(function () {
            let processWidth = $(".progress").width();
            processWidth -= 20;
            $(".progress").css({width:processWidth});
            if(processWidth <= 0){
                clearInterval(timer);
                $(".mask").stop().fadeIn(100);
                stopWolfAnimation();
            }
        },10000);
    }
});