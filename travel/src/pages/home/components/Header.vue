<template>
  <div class="header">
    <div class="header-left ">
		<span class="iconfont iconxiazai6"></span>
	</div>
    <div class="header-input">
		<span class="iconfont iconiconset0157"></span>
		输入城市/景点/游玩主题
	</div>
    <div class="header-right">城市
		<span class="iconfont iconjiantou"></span>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
	.header
		display: flex
		justify-content: space-between
		height: 2rem
		line-height: 2rem
		background: $bgColor
		color:#fff
		font-size:.8rem
		.header-left
			width: 1.6rem
			margin-left: .2rem
			.iconfont
				color:#fff
		.header-input
			background: #fff
			border-radius: .2rem
			flex:1
			margin: .3rem .6rem .3rem 0
			line-height: 1.4rem
			padding-left:.3rem
			font-size:.5rem
			color: #ccc
			.iconfont 
				font-size: .5rem
		.header-right 
			margin-right: .6rem
			.iconfont
				font-size: .5rem
</style>
