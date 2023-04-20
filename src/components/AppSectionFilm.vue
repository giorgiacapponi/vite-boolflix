<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    name: "AppSectionFilm",
    data() {
        return {
            store,
        };
    },
    components: { AppCard }
}
</script>

<template>
 
    <h2>film</h2>
    <div class="row">
        <div class="col" v-for="film in store.films">
            <AppCard :image="`${store.imageUrl}${film.poster_path}`" :title="film.title" :originalTitle="film.original_title " :voto="film.vote_average" :language="film.original_language" :overview="film.overview" />
        </div>
    </div>
   
</template>

<style scoped lang="scss">
h2{
    margin:3rem 0
}
.row{
    height: 513px;
    display:flex;

}
</style>