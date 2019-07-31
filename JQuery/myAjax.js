function objToStr(obj) {
    obj = obj || {};
    obj.t = new Date().getTime();
    var arr=[];
    for(let key in obj){
        arr.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));
    }
    return arr.join("&");
}

function ajax(options) {
    let xhr;
    let timer = null;
    let str = objToStr(options.data);
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(options.type.toLowerCase()==="get"){
        xhr.open(options.type,options.url+"?"+str,true);
        xhr.send();
    }else{
        xhr.open(options.type,options.url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(str);
    }
    xhr.onreadystatechange = function () {
        if(xhr.readyState===4){
            if(xhr.status>=200 && xhr.status <300 || xhr.status===304){
                console.log("收到数据");
                options.success(xhr);
            }else{
                console.log("数据接收失败");
                options.error(xhr);
            }
        }
    };

    if(options.timeout){
        timer = setTimeout(function () {
            console.log("请求中断");
            xhr.abort();
            clearTimeout(timer);
        },options.timeout)
    }
}

ajax({
    type:"get",
    data:{
        "name":"ling",
        "age":20
    },
    // url:"ajax.txt",
    url:"ajax_test.php",
    success: function (msg) {
        console.log(msg.responseText);
    },
    error: function (xhr) {
        console.log(xhr);
    }

});