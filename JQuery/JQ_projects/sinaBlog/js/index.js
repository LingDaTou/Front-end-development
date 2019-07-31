$(function () {
    $("body").delegate("textarea",'input propertychange',function () {
        if($(this).val().length > 0){
            $(".send").prop("disabled",false)
        }else{
            $(".send").prop("disabled",true)
        }
    });

    $(".send").click(function () {
        let $text = $('textarea').val();
        let $time = DateFormat();
        let $weibo = createNodes($text,$time);
        $('.messageList').prepend($weibo);
    });

    $("body").delegate(".zan",'click',function () {
        $(this).text(parseInt($(this).text())+1);
    })
    $("body").delegate(".cai",'click',function () {
        $(this).text(parseInt($(this).text())+1);
    })
    $("body").delegate(".del",'click',function () {
        $(this).parents(".msgInfo").remove();
    })

    function createNodes(text,time) {
        let $weibo =$("            <div class=\"msgInfo\">\n" +
            "                <p>"+text+"​​​​</p>\n" +
            "                <div class=\"infoControl\">\n" +
            "                    <span>"+time+"</span>\n" +
            "                    <div class=\"info\">\n" +
            "                        <a href=\"javascript:;\" class=\"iconfont icondianzan zan\"> 0</a>\n" +
            "                        <a href=\"javascript:;\" class=\"iconfont icondianzan cai\"> 0</a>\n" +
            "                        <a href=\"javascript:;\" class=\"iconfont iconGroup- del\"> 删除</a>\n" +
            "                     </div>\n" +
            "                </div>\n" +
            "            </div>")

        return $weibo;
    }

    function DateFormat() {
        let date = new Date();
        let arr=[date.getFullYear()+"-",date.getMonth()+1+"-",date.getDate()+" ",
            date.getHours()+":",date.getMinutes()+":",date.getSeconds()];
        return arr.join("");
    }


});