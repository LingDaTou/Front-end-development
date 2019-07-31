(function (window) {
    var myJQery = function (selector) {
        return new myJQery.prototype.init(selector);
    };
    myJQery.prototype={
        constructor: myJQery,
        init: function (selector) {

            selector = myJQery.trim(selector);

            if(!selector){
                return this;
            }
            // 函数
            else if(myJQery.isFunction(selector)){
                myJQery.ready(selector);
            }
            // 字符串
            else if(myJQery.isString(selector)){
                // 判断是否是代码片段
                if(myJQery.isHTML(selector)){
                    var temp = document.createElement("div");
                    temp.innerHTML=selector;
                    // for(let i=0;i<temp.children.length-1;i++){
                    //     this[i]=temp.children[i];
                    // }
                    // this.length=temp.children.length;
                    [].push.apply(this,temp.children);
                    // return this;
                }
                // 判断是否是选择器
                else{
                    var res = document.querySelectorAll(selector);
                    [].push.apply(this,res);
                    // return this;
                }
            }
            // 数组
            else if(myJQery.isArray(selector)){
                // 判断是否是真数组
                    /*
                    if(({}).toString.apply(selector)==="[object Array]"){
                        [].push.apply(this,selector);
                        return this;
                    }
                    else {
                        // 将伪数组转为真数组
                        var arr = [].slice.call(selector);
                        // 将真数组转为伪数组
                        [].push.apply(this,arr);
                        return this;
                    }
                    */

                    var arr = [].slice.call(selector);
                    [].push.apply(this,arr);
                    // return this;
            }
            // 除上述类型以外
            else {
                this[0]=selector;
                this.length=1;
                // return this;
            }
            return this;
        },
        // 属性
        jquery: "1.0.0",
        selector: "",
        length: 0,
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        // 方法
        toArray: function () {
            return [].slice.call(this);
        },
        get: function (num) {
            if(arguments.length===0){
                return this.toArray();
            }
            else if(num >= 0){
                return this[num];
            }
            else{
                return this[arguments.length + num];
            }
        },
        eq: function (num) {
            if(arguments.length==0){
                return new myJQery();
            }
            else {
                return myJQery(this.get(num));
            }
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        each: function (fn) {
           return myJQery.each(this,fn);
        }
    };

    myJQery.extend = myJQery.prototype.extend= function(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    };
    
    // 工具方法
    myJQery.extend({
        isString : function(str){
        return typeof str === 'string';
    },
        isHTML : function(str){
        return str.charAt(0)==="<" && str.charAt(str.length-1)===">" && str.length >= 3;
    },
        trim : function(str){
        if(!myJQery.isString(str)){
            return str;
        }
        if(str.trim){
            return str.trim();
        }
        else{
            return str.replace(/^\s+|\s$/g,"");
        }
    },
        isObject : function(sele){
        return typeof sele === "object";
    },
        isWindow : function(sele){
        return sele ===window;
    },
        isArray : function(sele){
        return myJQery.isObject(sele) && !myJQery.isWindow(sele) && "length" in sele;
    },
        isFunction : function(sele){
        return typeof sele === "function";
    },
        ready: function (fn) {
            if(document.readyState==="complete"){
                fn();
            }
            else if(document.addEventListener){
                document.addEventListener("DOMContentLoaded",function () {
                    fn();
                })
            }
            else{
                document.attachEvent("onreadystatechange",function () {
                    if(document.readyState === "complete"){
                        fn();
                    }
                })
            }
        },
        each: function (obj, fn) {
            // 真数组
            if(myJQery.isArray){
                for(let i=0;i<obj.length;i++){
                    var res = fn.call(obj[i],i,obj[i]);
                    if(res===true){
                        continue;
                    }else if(res===false){
                        break;
                    }
                }
            }
            // 伪数组
            else if(myJQery.isObject){
                for(var key in obj){
                    var res = fn.call(obj[key],key,obj[key]);
                    if(res===true){
                        continue;
                    }else if(res===false){
                        break;
                    }
                }
            }
            return obj;
        },
        map: function (obj,fn) {
            var arr=[];
            // 真数组
            if(myJQery.isArray){
                for(let i=0;i<obj.length;i++){
                    var res = fn(obj[i],i);
                    if(res){
                        arr.push(res);
                    }
                }
            }
            // 伪数组
            else if(myJQery.isObject){
                for(var key in obj){
                    var res = fn(obj[key],key);
                    if(res){
                        arr.push(res);
                    }
                }
            }
            return arr;
        },
        getStyle: function (dom, styleName) {
            if(window.getComputedStyle){
                return window.getComputedStyle(dom)[styleName];
            }
            else{
                return dom.currentStyle[styleName];
            }
        },
        addEvent: function (dom, name, callBack) {
            if(dom.addEventListener){
                dom.addEventListener(name,callBack);
            }else{
                dom.attachEvent("on"+name,callBack);
            }
        }
    });

    // 操作DOM元素的方法
    myJQery.prototype.extend({
        empty: function () {
            this.each(function (index, value) {
                value.innerHTML="";
            });
            // 方便链式编程
            return this;
        },
        remove: function (sele) {
            if(arguments.length===0){
                this.each(function (index, value) {
                    let parent = value.parentNode;
                    parent.removeChild(value);
                })
            }
            else{
                var $this= this;
                $(sele).each(function (index, value) {
                    var type = value.tagName;
                    $this.each(function (i, v) {
                        var t = v.tagName;
                        if(type===t){
                            let parent = value.parentNode;
                            parent.removeChild(value);
                        }
                    })
                })
            }
            return this;
        },
        html: function (sele) {
            if(arguments.length===0){
                return this[0].innerHTML;
            }
            else{
                this.each(function (index, value) {
                    value.innerHTML = sele;
                })
            }
        },
        text: function (sele) {
            if(arguments.length===0){
                var res="";
                this.each(function (index, value) {
                    res+=value.innerText;
                });
                return res;
            }
            else{
                this.each(function (index, value) {
                    value.innerText = sele;
                })
            }
        },
        appendTo: function (sele) {
            var $this=this;
            var $target = $(sele);
            var res=[];
            $target.each(function (index, value) {
                $this.each(function (i, v) {
                    if(index===0){
                        value.appendChild(v);
                        res.push(v);
                    }else{
                        var temp =v.cloneNode(true);
                        value.appendChild(temp);
                        res.push(temp);
                    }
                })
            });
            // 返回JQ对象
            return $(res);
            // for(let i=0; i < $target.length; i++){
            //     var targetEle = $target[i];
            //     for(let j=0; j<this.length; j++){
            //         var sourceEle = this[j];
            //         if(i===0){
            //             targetEle.appendChild(sourceEle);
            //         }
            //         else{
            //             var temp = sourceEle.cloneNode(true);
            //             targetEle.appendChild(temp);
            //         }
            //     }
            // }
        },
        prependTo: function (sele) {
            var $this = this;
            var $target = $(sele);
            var res = [];
            $target.each(function (index, value) {
                $this.each(function (i, v) {
                    if(index===0){
                        value.insertBefore(v,value.firstChild);
                        res.push(v);
                    }
                    else{
                        var temp = v.cloneNode(true);
                        value.insertBefore(temp,value.firstChild);
                        res.push(temp);
                    }
                })
            });
            return $(res);
        },
        append: function (sele) {
            if(myJQery.isString(sele)){
                this[0].innerHTML += sele;
            }else {
                $(sele).appendTo(this);
            }
            return this;
        },
        prepend: function (sele) {
            if(myJQery.isString(sele)){
                this[0].innerHTML = sele +this[0].innerHTML;
            }else{
                $(sele).prependTo(this);
            }
            return this;
        },
        insertBefore: function (sele) {
            var $this = this;
            var $target = $(sele);
            var res = [];
            $target.each(function (index, value) {
                var parent = value.parentNode;
                $this.each(function (i, v) {
                    if(index===0){
                        parent.insertBefore(v,value);
                        res.push(v);
                    }
                    else{
                        var temp = v.cloneNode(true);
                        parent.insertBefore(temp,value);
                        res.push(temp);
                    }
                })
            });
            return $(res);
        },
        replaceAll: function (sele) {
            var $this = this;
            var $target = $(sele);
            var res = [];
            $target.each(function (index, value) {
                $this.each(function (i, v) {
                    if(index===0){
                        v.insertBefore(value);
                        $(value).remove();
                        res.push(v);
                    }
                    else{
                        var temp = v.cloneNode(true);
                        temp.insertBefore(value);
                        $(value).remove();
                        res.push(temp);
                    }
                })
            });
            return $(res);
        },
        clone: function (deep) {
            var res=[];
            if(deep){
                // 深复制
                this.each(function (key, ele) {
                    var temp = ele.cloneNode(true);
                    myJQery.each(ele.eventCache,function (name, array) {
                        myJQery.each(array,function (index, method) {
                            $(temp).on(name,method);
                        })
                    });
                    res.push(temp);
                })s
            }
            else{
                // 浅复制
                this.each(function (key, ele) {
                    var temp = ele.cloneNode(true);
                    res.push(temp);
                })
            }
            return $(res);
        }
    });

    // 操作DOM属性的方法
    myJQery.prototype.extend({
        attr: function (attr, value) {
           // 如果传入的是字符串
           if(myJQery.isString(attr)){
               if(arguments.length===1){
                   return this[0].getAttribute(attr);
               }else{
                   $.each(this,function (index, ele) {
                       ele.setAttribute(attr,value);
                   })
               }
           }
           // 如果传入的是对象
           else if(myJQery.isObject(attr)){
               var $this =this;
                $.each(attr,function (key, value) {
                    $this.each(function (index, ele) {
                        ele.setAttribute(key,value);
                    })
                })
           }
           return this;
       },
        prop: function (attr, value) {
            // 如果传入的是字符串
            if(myJQery.isString(attr)){
                if(arguments.length===1){
                    return this[0][attr];
                }else{
                    $.each(this,function (index, ele) {
                        ele[attr]=value;
                    })
                }
            }
            // 如果传入的是对象
            else if(myJQery.isObject(attr)){
                var $this =this;
                $.each(attr,function (key, value) {
                    $this.each(function (index, ele) {
                        ele[key]=value;
                    })
                })
            }
            return this;
        },
        css: function (attr, value) {
            // 如果传入的是字符串
            if(myJQery.isString(attr)){
                if(arguments.length===1){
                    return myJQery.getStyle(this[0],attr);
                }else{
                    $.each(this,function (key, ele) {
                        ele.style[attr]= value;
                    })
                }
            }
            // 如果传入的是对象
            else if(myJQery.isObject(attr)){
                var $this =this;
                $.each(attr,function (key, value) {
                    $this.each(function (index, ele) {
                        ele.style[key]=value;
                    })
                })
            }
            return this;
        },
        val: function (content) {
            if(arguments===0){
                return this[0].value;
            }
            else{
                this.each(function (key, ele) {
                    ele.value = content;
                });
                return this;
            }
        },
        hasClass: function (name) {
            var flag = false;
            if(arguments.length===0){
                return flag;
            }
            else{
                this.each(function (key,ele) {
                    var className=" "+ele.className+" ";
                    name = " "+name+" ";
                    if(className.indexOf(name)!==-1){
                        flag =true;
                        return false;
                    }
                })
            }
            return flag;
        },
        addClass: function (name) {
            if(arguments.length===0){
                return this;
            }
            var names= name.split(" ");
            this.each(function (key,ele) {
                $.each(names,function (index, value) {
                    if(!$(ele).hasClass(value)){
                        ele.className = ele.className+" "+ value;
                    }
                })
            });
            return this;
        },
        removeClass: function (name) {
            if(arguments.length===0){
                this.each(function (key, ele) {
                    ele.className="";
                })
            }
            else{
                var names = name.split(" ");
                this.each(function (key, ele) {
                    $.each(names,function (index,value) {
                        if($(ele).hasClass(value)){
                            ele.className = (" "+ele.className+" ").replace(" "+value+" ","");
                        }
                    })
                })
            }
            return this;
        },
        toggleClass: function (name) {
            if(arguments.length===0){
                this.removeClass();
            }
            else{
                var names= name.split(" ");
                this.each(function (key, ele) {
                    $.each(names,function (k, value) {
                        if($(ele).hasClass(value)){
                            $(ele).removeClass(value);
                        }
                        else{
                            $(ele).addClass(value);
                        }
                    })
                })
            }
            return this;
        }
    });

    // 事件相关的方法
    myJQery.prototype.extend({
        on:function (name, callBack) {
            this.each(function (key, ele) {
                if(!ele.eventCache){
                    ele.eventCache={};
                }
                if(!ele.eventCache[name]){
                    ele.eventCache[name]=[];
                    ele.eventCache[name].push(callBack);
                    myJQery.addEvent(ele,name,function () {
                        myJQery.each(ele.eventCache[name],function (k, method) {
                            method();
                        })
                    });
                }
                else{
                    ele.eventCache[name].push(callBack);
                }
            })
        },
        off: function (name, callBack) {
            if(arguments.length===0){
                this.each(function (key, ele) {
                    ele.eventCache={};
                })
            }
            else if(arguments.length===1){
                this.each(function (key, ele) {
                    ele.eventCache[name]=[];
                })
            }
            else if(arguments.length===2){
                this.each(function (key, ele) {
                    myJQery.each(ele.eventCache[name],function (index, method) {
                        if(method===callBack){
                            ele.eventCache[name].splice(index,1);
                        }
                    })
                })
            }
        },
    });


    myJQery.prototype.init.prototype = myJQery.prototype;
    window.myJQuey =window.$ = myJQery;
})(window);