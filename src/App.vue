<script>
import AppHeader from './components/AppHeader.vue';
import AppSectionFilm from './components/AppSectionFilm.vue';
import AppSectionSeries from './components/AppSectionSeries.vue';
import axios from "axios";
import {store} from "./store"
export default{
components:{ AppHeader, AppSectionFilm, AppSectionSeries },
data(){
 return{
  store,
 }
},
methods:{
  searchFilms(){
    axios
    .get(this.store.ApiUrl,{
      params:this.store.paramsApi
      
    }
      
    )
    .then((resp)=>{
      this.store.films=resp.data.results
      console.log(resp.data.results);
    });

    axios
    .get(this.store.ApiUrlSeries,{
      params:this.store.paramsApi
      
    }
      
    )
    .then((resp)=>{
      this.store.series=resp.data.results
    })


  }
  
    
  }
}

  

</script>


<template>
<AppHeader @search="searchFilms()" />
<AppSectionFilm/>
<AppSectionSeries/>


</template>

<style lang="scss">
@use "./styles/general.scss"

</style>