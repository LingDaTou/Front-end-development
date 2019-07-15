(function (win) {
    function Player($audio) {
        return new Player.prototype.init($audio);
    }

    Player.prototype={
        constructor:Player,
        musicList : [],
        init: function ($audio) {
            this.$audio = $audio;
            this.audio = $audio.get(0);
        },
        currentIndex : -1,
        playMusic:function (index, music) {
            // 是同一首歌
            if(this.currentIndex === index){
                if(this.audio.paused){
                    this.audio.play();
                }else {
                    this.audio.pause();
                }
            }
            // 不是同一首歌
            else{
                this.$audio.attr("src",music.link_url);
                this.audio.play();
                this.currentIndex = index;
            }
        },
        // 处理上一首
        preMusic: function () {
            let index = this.currentIndex -1;
            if(index < 0){
                index = this.musicList.length-1;
            }
            return index;
        },
        // 处理下一首
        nextMusic: function () {
            let index = this.currentIndex +1;
            if(index > this.musicList.length-1){
                index = 0;
            }
            return index;
        },
        // 删除一条音乐
        deleteMusic :function (index) {
            this.musicList.splice(index,1);
            if(index < this.currentIndex){
                this.currentIndex = this.currentIndex-1;
            }
        },

        // 监听播放进度
        musicTimeUpdate: function(callback){
            var $this = this;
            this.$audio.on("timeupdate",function () {
                var currentTime = $this.audio.currentTime;
                var duration = $this.audio.duration;
                var time = $this.formatDate(currentTime,duration);
                callback(currentTime,duration,time)
            })
        },

        // 设置快进/ 快退
        musicSeekTo: function(value){
            if(isNaN(value)) return;
            this.audio.currentTime = this.audio.duration * value;
        },
        // 设置音量
        voiceSeekTo: function(value){
            // 0~1
            if(isNaN(value)) return;
            if(value < 0 || value >1) return;
            this.audio.volume = value;
        },
        // 获取时间并格式化
        formatDate: function (currentTime,duration) {
            // 当前播放时间
            var curMinutes = parseInt(currentTime / 60);
            curMinutes = curMinutes >10 ? curMinutes : "0"+curMinutes;
            var curSeconds = parseInt(currentTime % 60);
            curSeconds = curSeconds >10 ? curSeconds : "0"+curSeconds;
            // 总时长
            var durMinutes = parseInt(duration / 60);
            durMinutes = durMinutes >10 ? durMinutes : "0"+durMinutes;
            var durSeconds = parseInt(duration % 60);
            durSeconds = durSeconds >10 ? durSeconds : "0"+durSeconds;
            return curMinutes+":"+curSeconds+"/"+durMinutes+":"+durSeconds;
    }

    };

    Player.prototype.init.prototype = Player.prototype;
    window.Player = Player;

})(window);