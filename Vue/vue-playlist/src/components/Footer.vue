<template>
  <div class="footer">
    <footer>
  	   <p>{{title1}}-{{title}}</p>
     </footer>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      title1:"@CopyRight"
    }
  }
}
</script>


<style scoped>

footer{
	background:black;
	padding:10px;
  color:white;
  text-align:center
}
</style>
