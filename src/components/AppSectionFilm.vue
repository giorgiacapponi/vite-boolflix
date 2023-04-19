<script>
import {store} from "../store";
export default{
    name:"AppSectionFilm",
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <ul>
        <li v-for="film in store.films">
            titolo:{{ film.title }} <br>
            titolo originale:{{ film.original_title}} <br>
            lingua:{{film.original_language }} <br>
            voto:{{ film.vote_average }}
        </li>
    </ul>
   
</template>