<template>
  <div class="header">
  	<h1 @click="changeTitle">{{title1}}-{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props:{
  	title:{
  		type:String
  	}
  },
  data () {
    return {
      title1:"This is vue.js Demo"
    }
  },
  methods:{
  	changeTitle:function(){
  		//this.title="改变了传值"
  		this.$emit("titleChange","子组件向父组件传值")
  	}
  },

}
</script>


<style scoped>

h1{
	background:pink;
	padding:10px
}
</style>
