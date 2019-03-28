new Vue({
	el:"#myapp2",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		// addToA:function() {
		// 	console.log('A+age')
		// 	return this.a+this.age;
		// },
		// addToB:function(){
		// 	console.log('B+age')
		// 	return this.b+this.age;
		// },
	},
	computed:{
		addToA:function() {
			console.log('A+age')
			return this.a+this.age;
		},
		addToB:function(){
			console.log('B+age')
			return this.b+this.age;
		},
	},
})