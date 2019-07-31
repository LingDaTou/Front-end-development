$(function () {
    // JQ插件：滚动条样式
    $(".content_list").mCustomScrollbar();

    // 获取audio对象
    var $audio = $("audio");
    var player = new Player($audio);
    var progress;
    var voiceProgress;
    var lyric;


    // 初始化进度条
    initProgress();
    function initProgress(){
        // 获取进度条对象
        var $progressBar = $(".process_bar");
        var $progressLine = $(".process_line");
        var $progressDot = $(".process_dot");
        progress = new Progress($progressBar,$progressLine,$progressDot);
        progress.progressClick(function (value) {
            player.musicSeekTo(value);
        });
        progress.progressMove(function (value) {
            player.musicSeekTo(value);
        });

        var $voiceBar = $(".voice_bar");
        var $voiceLine = $(".voice_line");
        var $voiceDot = $(".voice_dot");
        voiceProgress = new Progress($voiceBar,$voiceLine,$voiceDot);

        voiceProgress.progressClick(function (value) {
            player.voiceSeekTo(value);
        });
        voiceProgress.progressMove(function (value) {
            player.voiceSeekTo(value);
        });
    }

    // 获取ajax数据
    getPlayList();
    function getPlayList() {
        $.ajax({
            url: "./source/musiclist.json",
            dataType:"json",
            success: function (data) {
                player.musicList=data;
                var $musicList = $(".content_list ul");
                $.each(data,function (index, ele) {
                    var $item = createMusicItem(index,ele);
                    $musicList.append($item);
                });
                initMusicInfo(data[0]);
                initMusicLyric(data[0]);
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    // 初始化界面歌曲信息
    function initMusicInfo(music){
        var musicImage = $(".song_pic img");
        var musicName = $(".song_name a");
        var musicSinger = $(".song_singer a");
        var musicAlbum = $(".song_album a");

        var processMusicName =$(".process_name");
        var processMusicTime = $(".progress_time");
        var musicBg = $('.mask_bg');

        musicImage.attr("src",music.cover);
        musicName.text(music.name);
        musicSinger.text(music.singer);
        musicAlbum.text(music.album);

        processMusicName.text(music.name+" / "+ music.singer);
        processMusicTime.text("00:00"+" / "+music.time);
        musicBg.css("background","url('"+music.cover+"')");
    }

    // 初始化歌词信息
    function initMusicLyric(music){
        lyric = new Lyric(music.link_lrc);
        var $lyricContainer = $(".song_lyrics");
        $lyricContainer.html("");
        lyric.loadLyric(function () {
            $.each(lyric.lyricList,function (index, ele) {
                var lyricItem = $("<li>"+ele+"</li>");
                $lyricContainer.append(lyricItem);
            })

        });

    }

    // 事件处理
    initEvent();
   function initEvent(){
       // 音乐列表移入事件
       $(".content_list").delegate(".list_music","mouseenter",function () {
           $(this).find('.list_menu').stop().fadeIn(100);
           $(this).find(".list_time span").stop().fadeOut(100);
           $(this).find(".list_time a").stop().fadeIn(100);
       });

       // 音乐列表移除事件
       $(".content_list").delegate(".list_music","mouseleave",function () {
           $(this).find('.list_menu').stop().fadeOut(100);
           $(this).find(".list_time span").stop().fadeIn(100);
           $(this).find(".list_time a").stop().fadeOut(100);
       });
       // 复选框勾选事件
       $(".content_list").delegate(".list_check i","click",function () {
           $(this).toggleClass('list_checked');
       });

       // 音乐列表的播放按钮
       var $musicPlay = $(".music_play");
       $(".content_list").delegate(".music_menu_play","click",function () {
           var $item = $(this).parents(".list_music");
           $(this).toggleClass("music_menu_play2");
           $item.siblings().find(".music_menu_play").removeClass("music_menu_play2");

           // 同步上下播放按钮的状态
           if($(this).attr("class").indexOf("music_menu_play2") !== -1){
               // 播放状态
               $musicPlay.addClass("music_play2");
               $item.find("div").css({color:"#fff"});
               $item.siblings().find("div").css({color:"rgba(255,255,255,0.5)"});
               // 改变数字样式
               $item.find(".list_number").addClass("list_number_wave");
               $item.siblings().find(".list_number").removeClass("list_number_wave");
           }else {
               // 暂停状态
               $musicPlay.removeClass("music_play2");
               $item.find("div").css({color:"rgba(255,255,255,0.5)"});
               // 改变数字样式
               $item.find(".list_number").removeClass("list_number_wave");
           }

           // 播放音乐
           player.playMusic($item.get(0).index,$item.get(0).music);
           initMusicInfo($item.get(0).music);
           initMusicLyric($item.get(0).music)
       });

       // 底部播放
       $musicPlay.click(function () {
           if(player.currentIndex === -1){
                $(".list_music").eq(0).find(".music_menu_play").trigger("click");
           }else{
               $(".list_music").eq(player.currentIndex).find(".music_menu_play").trigger("click");
           }
       });

       // 上一首
        $(".music_pre").click(function () {
            $(".list_music").eq(player.preMusic()).find(".music_menu_play").trigger("click");
        });
       // 下一首
       $(".music_next").click(function () {
           $(".list_music").eq(player.nextMusic()).find(".music_menu_play").trigger("click");
       });

       // 删除歌曲
       $(".content_list").delegate(".list_music_del","click",function () {
            let $item = $(this).parents(".list_music");
            if($item.get(0).index === player.currentIndex){
                $(".music_next").trigger("click");
            }
            $item.remove();
            player.deleteMusic($item.get(0).index);

            $('.list_music').each(function (index, ele) {
                ele.index = index;
                $(ele).find(".list_number").text(index+1);
            })
       });

       // 监听播放进度
       player.musicTimeUpdate(function (currentTime,duration,time) {
           $(".progress_time").text(time);
            var value = currentTime / duration *100;
            progress.setProgress(value);
            var index = lyric.currentIndex(currentTime);
            var $item = $('.song_lyrics li').eq(index);
            $item.addClass("cur");
            $item.siblings().removeClass("cur");

            if(index <= 2) return;
            $(".song_lyrics").css({
                marginTop: (-index + 2) * 30
            })
       });

       // 监听音量
       $(".voice_icon").click(function () {
           $(this).toggleClass("voice_icon2");
           if($(this).attr("class").indexOf("voice_icon2") === -1){
               //有声音
               player.voiceSeekTo(1);
           }
           // 无声音
           else{
                player.voiceSeekTo(0);
           }
       })

   }


    // 创建一条歌曲
    function createMusicItem(index,music) {
        var $item = $("<li class=\"list_music\">\n" +
"                                <div class=\"list_check\"><i></i></div>\n" +
"                                <div class=\"list_number\">"+(index+1)+"</div>\n" +
"                                <div class=\"list_name\">"+music.name+"\n" +
"                                    <div class=\"list_menu\">\n" +
"                                        <a href=\"javascript:;\" class='music_menu_play'></a>\n" +
"                                        <a href=\"javascript:;\"></a>\n" +
"                                        <a href=\"javascript:;\"></a>\n" +
"                                        <a href=\"javascript:;\"></a>\n" +
"                                    </div>\n" +
"                                </div>\n" +
"                                <div class=\"list_singer\">"+music.singer+"</div>\n" +
"                                <div class=\"list_time\">\n" +
"                                    <span>"+music.time+"</span>\n" +
"                                    <a href=\"javascript:;\" class='list_music_del'></a>\n" +
"                                </div>\n" +
"                            </li>");
            $item.get(0).index = index;
            $item.get(0).music = music;
        return $item;
    }
});
