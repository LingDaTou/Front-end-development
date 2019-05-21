<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">南京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import BScroll from "better-scroll"
export default {
    name:"CityList",
    props:{
        cities:{
            type:Object
        },
        hotCities:{
            type:Array
        },
        letter:String
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch:{
        letter() {
            if(this.letter){
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>


<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color:#ccc
    &:after
        border-color:#ccc
    .border-bottom
        &:before
            border-color:#ccc

.list
    overflow :hidden
    position:absolute
    top:4rem
    bottom:0
    left :0
    right :0

    .title
        line-height :1.2rem
        background :#eee
        padding-left :.2rem
        color :#666
        font-size:1rem

    .button-list
        padding 0.3rem 1.5rem .3rem .3rem
        overflow :hidden

        .button-wrapper
            float :left
            width:33.33%
        
        .button
            text-align :center
            margin :.3rem
            border:.05rem solid #ccc
            border-radius:3px
            padding :2px 0

    .item-list
        .item
            line-height :2rem
            color:#666
            padding-left:.2rem
</style>
