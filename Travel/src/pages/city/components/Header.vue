<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>


<script>
export default {
    name:"CityHeader"    
}
</script>


<style lang="stylus" scoped>

.header
  position:relative
  line-height:2rem
  background:#00bcd4
  color:#fff
  text-align:center

.header-back
    position:absolute
    top:0
    left :0
    width :.64rem
    text-align :center
    font-size:20px
    color:#fff
</style>
