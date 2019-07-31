(function() {
    let timer = null;
    function linearAnimation(ele, obj,fn) {
        clearInterval(timer);
        timer = setInterval(function () {
            let flag =true;
            for(let key in obj){
                let distance = obj[key];
                let style = getComputedStyle(ele);
                let begin = parseInt(style[key]) || 0;
                let step = distance-begin > 0 ? 13 :-13;
                begin += step;
                if(Math.abs(distance - begin) > Math.abs(step)){
                    flag = false;
                }
                else{
                    begin = distance;
             }
                ele.style[key] = begin + "px";
                }
                if(flag){
                    clearInterval(timer);
                   fn && fn();
              }
          },100)
    }
    function easeAnimation(ele, obj,fn) {
        clearInterval(timer);
        timer = setInterval(function () {
            let flag = true;
            for(let key in obj){
                let distance = obj[key];
                let style = getComputedStyle(ele);
                let begin = parseInt(style[key]) || 0;
                let step = (distance - begin) * 0.3;
                begin += step;
                if(Math.abs(Math.floor(step)) > 1){
                    flag =false;
                }
                else{
                    begin = distance;
                }
                ele.style[key] = begin + "px";
            }
            if(flag){
                clearInterval(timer);
                fn && fn();
            }
        },100)
    }

    window.linearAnimation = linearAnimation;
    window.easeAnimation = easeAnimation;
})();