<template>
  <div id="show-blogs" v-theme:column="'width'">
  	<h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
  	<div class="single-blogs" v-for="blog in filterdBlogs" :key="blog">

  		<router-link v-bind:to="'/blog/'+blog.id">
      <h2 v-rainbow>{{blog.title | toUpperCase}}</h2>
      </router-link>
      
  		<article>{{blog.content | snippet}}</article>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
  	return {
  		blogs:[],
      search:""
  	}
  },
  created(){
  	this.$http.get("https://firstproject-8fd8a.firebaseio.com/posts.json")
  	.then(function(data){
      console.log(data.json);
      return data.json()
  		// this.blogs=data.body.slice(0,10);
    })
    .then(function(data){
      var blogsArray=[];
      for(let key in data){
        // console.log(key);
        // console.log(data[key]);
        data[key].id=key;
        blogsArray.push(data[key]);
      }
      console.log(blogsArray);
      this.blogs=blogsArray;
    })
  },
  computed:{
    filterdBlogs:function(){
        return this.blogs.filter((data)=>{
          return data.title.match(this.search)
        })
    }
  },
  filters:{
    toUpperCase(value){
      return value.toUpperCase();
    }
    //此处直接添加多个过滤器
  },
  directives:{
    "rainbow":{
      bind(el,binding,vnode){
        el.style.color="#"+Math.random().toString(16).slice(2,8)
      }
    }
    //此处直接添加多个指令
  }

}
</script>

<style scoped>
#show-blogs{
	max-width:800px;
	margin:0 auto;
}
.single-blogs{
	margin:20px;
	padding:20px 0;
	box-sizing:border-box;
	background:#eee;
  border:1px dotted #aaa;
}

#show-blogs a{
  color:#444;
  text-decoration:none;
}
input[type="text"]{
  padding:8px;
  width:100%;
  box-sizing:border-box;
}
</style>
