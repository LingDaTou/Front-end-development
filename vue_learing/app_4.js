new Vue({
	el:"#myapp4",
	data:{
		changeColor:false,
		changeLength:false,
	},
	methods:{

	},
	computed:{
		changeStyle:function(){
			return {
				changeColor:this.changeColor,
				changeLength:this.changeLength
			}
		}
	}
})