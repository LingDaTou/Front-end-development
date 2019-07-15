(function (win) {
    function Lyric(path) {
        return new Lyric.prototype.init(path);
    }
    Lyric.prototype={
        constructor: Lyric,
        init: function (path) {
            this.path = path;
        },
        timeList:[],
        lyricList:[],
        index: -1,
        loadLyric: function (callback) {
            var $this = this;
            $.ajax({
                url: $this.path,
                dataType: "text",
                success: function (data) {
                    $this.parseLyric(data);
                    callback();
                },
                error: function (err) {
                    console.log(err);
                }
            })
        },
        // 解析歌词和时间
        parseLyric: function (data) {
            $this =this;
            $this.timeList=[];
            $this.lyricList=[];
            var array = data.split("\n");
            $.each(array,function (index, ele) {
                // 解析歌词并保存
                var lyricStr = ele.split("]")[1];
                if(lyricStr.length===1) return true;
                $this.lyricList.push(lyricStr);
                // 解析时间并保存
                var timeReg = /\[(\d*:\d*\.\d*)\]/;
                var timeStr = timeReg.exec(ele);
                if(timeStr==null) return true;
                timeStr = timeStr[1];
                var timeRes = timeStr.split(":");
                var min = parseInt(timeRes[0]) * 60;
                var sec = parseFloat(timeRes[1]);
                var time = parseFloat(Number(min + sec).toFixed(2));
                $this.timeList.push(time);
            })
        },
        // 同步歌词
        currentIndex: function (currentTime) {
            if(currentTime >= this.timeList[0]){
                this.index++;
                this.timeList.shift();
            }
            return this.index;
        }

    };
    window.Lyric = Lyric;
    Lyric.prototype.init.prototype = Lyric.prototype;

})(window);