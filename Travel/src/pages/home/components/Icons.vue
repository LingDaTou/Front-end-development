<template>
    <div class="icons">
        <swiper >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" 
                v-for="item of page" :key="item.id" >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.iconUrl"/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>      
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data(){
        return{
            iconList:[{
                id:"0001",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:"景点门票"
            },{
                id:"0002",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc:"一日游"
            },{
                id:"0003",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:"文化古迹"
            },{
                id:"0004",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:"文化古迹"
            },{
                id:"0005",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:"牛首山"
            },{
                id:"0006",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc:"一日游"
            },{
                id:"0007",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:"文化古迹"
            },{
                id:"0008",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:"文化古迹"
            },{
                id:"0009",
                iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
                desc:"文化古迹"
            }]
        }
    },
    computed:{
        pages (){
            const pages=[]
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index / 8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped> 
// @import '~styles/varibles.styl'

.icons >>> .swiper-container
    height :0
    padding-bottom :50%

.icon   
    position: relative
    overflow :hidden
    width:25%
    float:left
    padding-bottom :25%
    height :0

.icon-img
    position :absolute
    top:0
    left:0
    right :0
    bottom :.10rem
    box-sizing:border-box
    padding:.1rem

.icon-img-content
    display :block
    margin :0 auto 
    height:80% 

.icon-desc
    position :absolute
    left :0
    right :0
    bottom:0
    height 1rem
    color :#333
    text-align :center
    overflow :hidden
    white-space :nowrap
    text-overflow :ellipsis
</style>


