<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" 
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
        >{{item}}
        </li>
    </ul>
</template>


<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    data(){
        return{
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated() {
        this.startY=this.$refs['A'][0].offsetTop
    },
    computed:{
        letters() {
            const letters=[]
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
        font-family : Apple Braille
        color:#00bcd4
</style>
