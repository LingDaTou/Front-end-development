<template>
    <div>
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title  border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array
        }
    },
    name:"DetailList"

}
</script>

<style lang="stylus" scoped>
.item-title
    line-height :1rem
    font-size :.8rem
    padding : .2rem .2rem
   
   .item-title-icon
        position :relative
        left :.6rem
        display: inline-block
        width: .76rem
        height: .36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .6rem
        background-size: 1rem 3rem
    
.item-children
    padding :0 .8rem

</style>
