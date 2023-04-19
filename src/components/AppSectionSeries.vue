<script>
import {store} from "../store"
export default {
    name:"AppSectionSeries",
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
<ul>
    <li v-for="serie in store.series">
    titolo:{{ serie.name }} <br>
    titolo originale:{{ serie.original_name }} <br>
    lingua:{{serie.original_language  }} <br>
    voto:{{ serie.vote_average }}
    </li>
</ul>
</template>
<style scoped lang="scss">
ul{
    margin-top: 3rem;
}
</style>