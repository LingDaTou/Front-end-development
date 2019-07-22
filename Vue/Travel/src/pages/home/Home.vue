<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>

<script type="text/javascript">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

	export default{
		name:"Home",
		data(){
			return{
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json')
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				res=res.data;
				if(res.ret && res.data){
					// this.city=res.data.city
					this.swiperList=res.data.swiperList
					this.iconList=res.data.iconList
					console.log(res.data.iconList)
					this.recommendList=res.data.recommendList
					this.weekendList=res.data.weekendList
				}
			}
		},
		mounted(){
			this.getHomeInfo()
		}
	}

</script>

<style type="text/css" scoped>

</style>