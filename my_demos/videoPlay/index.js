window.onload =function () {
    let ofigure = document.querySelector("figure");
    let oVideo =document.querySelector("video");
    let play = document.querySelector("#play");
    let oSpanTotle = document.querySelector(".totle-time");
    let currentTime = document.querySelector(".current-time");
    let line = document.querySelector(".line");
    let oProcess = document.querySelector(".process");
    let fullBtn = document.querySelector("#full");

    // 视频加载完毕
    oVideo.oncanplay = function () {
        ofigure.style.backgroundImage = "";
        this.style.display = "block";
        let time = this.duration;
        let obj = getTime(time);
        oSpanTotle.innerHTML = `${obj.hours}:${obj.minutes}:${obj.seconds}`;

    };
    // 视频结束
    oVideo.onended = function(){
        this.currentTime = 0;
        play.className = "iconfont iconbofang";
        currentTime.innerHTML="00:00:00";
        line.style.width = "0%";
        flag = false;
    };

    // 是否全屏
    fullBtn.onclick = function(){
        toFullVideo(oVideo);
    };

    // 全屏
    function toFullVideo(videoDom){
        if(videoDom.requestFullscreen){
            return videoDom.requestFullscreen();
        }else if(videoDom.webkitRequestFullScreen){
            return videoDom.webkitRequestFullScreen();
        }else if(videoDom.mozRequestFullScreen){
            return videoDom.mozRequestFullScreen();
        }else{
            return videoDom.msRequestFullscreen();
        }
    }

    // 快进 / 快退
    oProcess.onclick = function(event){
        let currentTime = event.offsetX / this.offsetWidth * oVideo.duration;
        oVideo.currentTime = currentTime;
    };


    // 判断是否播放
    let flag =false;
    play.onclick =function () {
        if(flag){
            flag=false;
            this.className = "iconfont iconbofang";
            oVideo.pause();

        }else {
            flag=true;
            this.className = "iconfont iconsuspend_icon";
            oVideo.play();
        }
    };
    // 监听播放中
    oVideo.ontimeupdate = function () {
        let currenttime = this.currentTime;
        let obj = getTime(currenttime);
        currentTime.innerHTML = `${obj.hours}:${obj.minutes}:${obj.seconds}`;
        let process = this.currentTime / this.duration * 100;
        line.style.width = process + "%";
    }

};

function getTime(time) {
    let hours = Math.floor(time / (60*60) % 24);
    hours = hours <10 ? "0"+hours : hours;
    let minutes = Math.floor(time / 60% 60);
    minutes = minutes < 10 ? "0"+minutes : minutes;
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? "0"+seconds : seconds;
    return {
        hours : hours,
        minutes : minutes,
        seconds : seconds
    }
}