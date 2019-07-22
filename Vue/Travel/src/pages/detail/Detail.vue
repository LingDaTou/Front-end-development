<template>
    <div>
        <detail-banner 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>



<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name:"Detail",
    data(){
        return {
            sightName:" ",
            bannerImg:" ",
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailInfo () {
            // axios.get("/api/detail.json?id" +this.$route.params.id)
            axios.get("/api/detail.json",{
                params:{
                    id:this.$route.params.id
                }
            })
            .then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc(respnse){
            respnse=respnse.data
            if(respnse.ret && respnse.data){
                const data=respnse.data
                this.sightname=data.sightname
                this.bannerImg=data.bannerImg
                this.gallaryImgs=data.gallaryImgs
                this.list=data.categoryList
            }
        }
    },
    mounted(){
        this.getDetailInfo()
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    }
}
</script>


<style lang="stylus" scoped>
.content
    height :60rem
</style>



