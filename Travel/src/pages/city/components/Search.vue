<template>
    <div class="search">
       <input type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
</template>


<script>
export default {
    name:"CitySearch"    
}
</script>


<style lang="stylus" scoped>
.search
      background:#00bcd4
      height :2rem
      padding:1px 3px
      
      .search-input
          box-sizing:border-box
          padding:1px 1px
          line-height :1.7rem
          width :100%
          text-align :center
          border-radius:5px
          color :#666
</style>
