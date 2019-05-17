<template>
    <div>
       <div  class="title">周末去哪儿</div>
       <ul>
           <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data() {
        return {
            recommendList:[{
                id:"0001",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg",
                title:"南京必打卡",
                desc:"看尽王侯将相荣辱成败，六朝金粉潮起潮落"
            },{
                id:"0002",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg",
                title:"民国情怀国共风华",
                desc:"南京，一座历史文化名城，这片土地上曾经经历过太多太多值得我们去追忆的往事"
            },{
                id:"0003",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg",
                title:"牛首山文化旅游区",
                desc:"让小朋友能够体验互动的快乐"
            },{
                id:"0004",
                imgUrl:"http://img1.qunarzz.com/sight/source/1811/58/a02ad3ab47e3e3.jpg_r_640x214_08977098.jpg",
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

.item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom :33.9%

// .item
//     display :flex
//     height :6rem
//     overflow :hidden

    .item-img
        width :100%

    .item-info
        padding:.6rem
    
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
    
</style>


