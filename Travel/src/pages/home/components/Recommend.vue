<template>
    <div>
       <div  class="title">热销推荐</div>
       <ul>
           <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    data() {
        return {
            recommendList:[{
                id:"0001",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_250x250_f6a6d22b.jpg",
                title:"银杏湖乐园",
                desc:"让小朋友能够体验互动的快乐"
            },{
                id:"0002",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1805/9b/9b3cbcf2624bf8cea3.img.jpg_200x200_075bc9ef.jpg",
                title:"弘阳未来世界主题乐园",
                desc:"让小朋友能够体验互动的快乐"
            },{
                id:"0003",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_200x200_a1ff6094.jpg",
                title:"牛首山文化旅游区",
                desc:"让小朋友能够体验互动的快乐"
            },{
                id:"0004",
                imgUrl:"http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_250x250_f6a6d22b.jpg",
                title:"银杏湖乐园",
                desc:"让小朋友能够体验互动的快乐"
            }]
        }
    }
}
</script>


<style lang="stylus" scoped>
.title
    margin-top:5px
    line-height :2rem
    background :#eee
    text-indent:.2rem

.item
    display :flex
    height :6rem
    overflow :hidden

    .item-img
        width :5.7rem
        height :5.7rem
        padding:.1rem

    .item-info
        flex:1
        padding:.6rem
        min-width :0
    
    .item-title
        padding-top:10px
        padding-bottom:10px
        line-height :.54rem
        font-size:1.2rem
        overflow :hidden
        white-space :nowrap
        text-overflow :ellipsis
    
    .item-desc
        margin-top:5px
        line-height :.6rem
        color:#ccc
    
    .item-button
        line-height :.44rem
        background :#ff9300
        padding:.3rem
        border-radius:3px
        margin-top :12px
        color:white
        
</style>


