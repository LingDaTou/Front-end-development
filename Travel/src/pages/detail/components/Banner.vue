<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img src="https://img1.qunarzz.com/sight/p0/1805/9b/9b3cbcf2624bf8cea3.img.jpg_600x330_23987222.jpg"
            class="banner-img"
            >
            <div class="bannner-info">
                <div class="banner-title">弘阳未来世界主题乐园</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe674;</span>39
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>



<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
    name:"DetailBanner",
    data() {
        return {
            imgs:["http://img1.qunarzz.com/sight/p0/1805/87/874da7d4673db500a3.img.jpg_r_800x800_674c6354.jpg",
                "http://img1.qunarzz.com/sight/p0/1805/a4/a49faaf0e6fa35b1a3.img.jpg_r_800x800_a2b0157c.jpg"
                ],
            showGallary:false
        }
    },
    components:{
        CommonGallary
    },
    methods:{
        handleBannerClick() {
            this.showGallary=true
        },
        handleGallaryClose() {
            this.showGallary=false
        }
    }
}
</script>


<style lang="stylus" scoped>
.banner
    position :relative
    overflow:hidden
    height :0
    padding-bottom :55%

    .banner-img
        width :100%
    
    .bannner-info
        display :flex
        position :absolute
        left :0
        right :0
        bottom :0
        line-height :1rem
        color:#fff
        background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))

        .banner-title
            padding 0.3rem
            font-size :.92rem
            flex:1
        .banner-number
            margin-top:.2rem
            font-size :.92rem
            padding :.2rem 1rem
            line-height :.8rem
            height :.8rem
            border-radius :.3rem
            background :rgba(0,0,0,0.8)
            .banner-icon
                font-size :.92rem
</style>



