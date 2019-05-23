<template>
    <div>   
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>



<script>
export default {
    name:"DetailHeader",
    data() {
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            const top=document.documentElement.scrollTop
            if(top > 60){
                let opacity=top/140
                opacity=opacity > 1 ? 1:opacity
                this.opacityStyle={ opacity }
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }
    },
    created () {
        window.addEventListener("scroll",this.handleScroll)
    },
    // deactivated() {
    //     window.removeEventListener("scroll",this.handleScroll)
    // }
}
</script>


<style lang="stylus" scoped>
.header-abs
    position :absolute
    left :.4rem
    top:.2rem
    width :1.6rem
    height :1.6rem
    line-height :1.6rem
    border-radius :.8rem
    text-align :center
    background :rgba(0,0,0,0.8)

    .header-abs-back
        color :#fff

.header-fixed
    z-index:99
    position :fixed
    top:0
    left :0
    right :0
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



