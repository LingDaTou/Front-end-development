(function (window) {
    function Progress($progressBar,$progressLine,$progressDot) {
        return new Progress.prototype.init($progressBar,$progressLine,$progressDot);
    }
    Progress.prototype={
        constructor: Progress,
        init: function ($progressBar,$progressLine,$progressDot) {
            this.$progressBar = $progressBar;
            this.$progressLine = $progressLine;
            this.$progressDot = $progressDot;
        },
        isMove: false,

        // 进度条点击
        progressClick: function (callback) {
            var $this = this;
            this.$progressBar.click(function (event) {
                var offsetX = $(this).offset().left;
                var PageX = event.pageX;
                $this.$progressLine.css({width: PageX - offsetX});
                $this.$progressDot.css({left: PageX - offsetX});
                var value = (PageX - offsetX) / $(this).width();
                callback(value);
            })
        },

        // 进度条移动
        progressMove: function (callback) {
            var $this = this;
            var offsetX = this.$progressBar.offset().left;
            var barWidth = this.$progressBar.width();
            var PageX;
            // 鼠标按下
            this.$progressBar.mousedown(function () {
                $this.isMove = true;
                $(document).mousemove(function (event) {
                    PageX = event.pageX;
                    let mouseX = PageX - offsetX;
                    console.log(mouseX);
                    if(mouseX >= 0 && mouseX <= barWidth){
                        $this.$progressLine.css({width: mouseX});
                        $this.$progressDot.css({left: mouseX});
                    }
                });
            });

            // 鼠标抬起：取消
            $(document).mouseup(function () {
                $(document).off("mousemove");
                $this.isMove = false;
                let value = (PageX - offsetX) / barWidth;
                callback(value);
            })
        },

        // 监听播放进度: 设置进度条
        setProgress: function (value) {
            if(this.isMove) return;
            if(value < 0 || value > 100) return;
            this.$progressLine.css({width: value + "%"});
            this.$progressDot.css({left: value + "%"})
        }
        //
    };
    Progress.prototype.init.prototype = Progress.prototype;
    window.Progress = Progress;
})(window);