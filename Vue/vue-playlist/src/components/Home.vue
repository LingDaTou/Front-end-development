<!-- 模板:html结构 -->
<template>
  <div id="home">
    <app-header v-bind:title="title" @titleChange="updateTitle($event)"></app-header>
    <h1>CSS测试</h1>
    <p>{{title}}</p>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 行为：处理逻辑 -->
<script>
// 局部组件：导入
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

//局部注册组件
export default {
  name: 'home',
  data(){
    return {
      users:[


      ],
      title:"传递的是一个值（number string boolean）"
    }
  },
  methods:{
    updateTitle:function(args){
      this.title=args;
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  // ES6语法
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
    .then((data)=>{
      this.users=data.body;
    })
  }
}
</script>

<!-- 样式：解决样式 -->
<style scoped>
h1{
  color:pink; 
}
</style>
