<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>


<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    }
}
</script>


<style lang="stylus" scoped>
.list
    display :flex
    flex-direction :column
    justify-content :center
    position :absolute
    bottom :0
    right :0.3rem
    top:4rem
    width :.8rem
    .item
        line-height :1.2rem
        text-align:center
        color:#00bcd4
</style>
