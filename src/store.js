import {reactive} from "vue";
export const store= reactive({
    searchingTitle:"",
    films:[],
    series:[],
    ApiUrl:"https://api.themoviedb.org/3/search/movie?api_key=217a1870df04d0bbd6cb73a14ecca21f",
    ApiUrlSeries:"https://api.themoviedb.org/3/search/tv?api_key=217a1870df04d0bbd6cb73a14ecca21f",
    paramsApi:{
        query:""
    },
    imageUrl:"https://image.tmdb.org/t/p/w342"
    
    
})
