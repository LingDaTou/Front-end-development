<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>


<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
      return {
          hotCities:[],
          cities:{}
      }  
    },
    methods:{
        getCityInfo() {
            axios.get("/api/city.json")
            .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(response) {
            response=response.data
            if(response.ret && response.data){
                    this.hotCities=response.data.hotCities
                    this.cities=response.data.cities
                }
            }
         },
    mounted() {
        this.getCityInfo()
    }
}
</script>


<style lang="stylus" scoped>

</style>
