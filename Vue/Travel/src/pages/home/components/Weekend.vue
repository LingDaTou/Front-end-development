<template>
    <div>
       <div  class="title">周末去哪儿</div>
       <ul>
           <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
               <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl"/>
               </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    name:"HomeWeekend",
    props:{
        weekendList:Array
    }
}
</script>


<style lang="stylus" scoped>
.title
    line-height :2rem
    background :#eee
    text-indent:.2rem

.item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom :33.9%

    .item-img
        width :100%

.item-info
    padding:.6rem
    
    .item-title
        padding-top:10px
        padding-bottom:10px
        line-height :.54rem
        font-size:1rem
        overflow :hidden
        white-space :nowrap
        text-overflow :ellipsis
    
    .item-desc
        margin-top:1px
        line-height :1rem
        color:#ccc
        overflow :hidden
        white-space :nowrap
        text-overflow :ellipsis
    
</style>


