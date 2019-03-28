//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		name:"mike",
		age:20,
		websites:"https://www.baidu.com",
		websitesTag:"<a href='https://www.baidu.com'>click</a>"
	},
	methods:{
		greet:function(time){
			return "Good"+" "+time+" "+this.name+"!";
		}
	}
});
/*
* el:element需要获取的元素，根容器元素
* data:用于数据的存储
* methods:存储各种方法
*  data-binding：给属性绑定对应的值
*/