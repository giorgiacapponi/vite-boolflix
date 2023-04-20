<script>
import {store} from "../store"
import AppCard from "./AppCard.vue";
export default {
    name: "AppSectionSeries",
    data() {
        return {
            store,
        };
    },
    components: { AppCard }
}
</script>

<template>
    <h2>Serie TV</h2>
    <div class="row">
        <div class="col" v-for="serie in store.series">
            <AppCard :image="`${store.imageUrl}${serie.poster_path}`" :title="serie.name" :originalTitle="serie.original_name " :voto="serie.vote_average" :language="serie.original_language" :overview="serie.overview" />
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