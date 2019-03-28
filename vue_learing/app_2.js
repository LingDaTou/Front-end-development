new Vue({
   el:"#myapp",
   data:{
       age:30,
       x:0,
       y:0,
       name:"mike",
       sex:""
   },
    methods:{
       add:function (inc) {
           this.age+=inc;
       },
        substact:function (dec) {
            this.age-=dec;
        },
        updateXY:function(event){
        	// conslog.log(event);
        	this.x=event.offsetX;
        	this.y=event.offsetY;
        	//获取X、Y轴坐标
        },
        stopMoving:function(event){
        	event.stopPropagation();
        	//阻止冒泡
        },
        alert:function() {
        	alert('hello vue.js')
        },
        logName:function () {
            alert('你正在输入姓名');
        },
        logAge:function () {
            console.log("你正在输入年龄");
        }
    }
});