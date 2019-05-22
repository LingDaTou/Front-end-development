<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题</div>
		<router-link to="/city">
			<div class="header-right">{{this.$store.state.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>


<script type="text/javascript">

	export default{
		name:"HomeHeader",
		// props:{
		// 	city:String
		// }
	}

</script>

<style lang="stylus" scoped>
// @import '~styles/varibles.styl'

.header
	display:flex
	line-height:2rem
	background:#00bcd4
	color:#fff

.header-left
	width:2rem
	float:left

.back-icon
	text-align center
	font-size :20px

.header-input
	flex:1
	padding-left:10px
	background:#fff
	border-radius:5px
	line-height :2rem
	margin-top:3px
	margin-bottom :3px
	color:#ccc

.header-right
	margin-left :2px
	width:3.5rem
	float:right
	text-align:center
	color :white

.arrow-icon
	font-size :.24rem
	margin-left :-0.24rem
</style>