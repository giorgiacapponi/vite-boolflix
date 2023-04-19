<script>
import {store} from "../store";
export default{
    name:"AppHeader",
    emits:["search"],
    data(){
        return{
            store
        }
    }
}
</script>


<template>
<header>
    <h1>Boolflix</h1>
    <input type="text" placeholder="inserisci titolo del fim" v-model="store.paramsApi.query" @keyup.enter="$emit('search')">
</header>
</template>


<style scoped lang="scss">
@use "../styles/mixins.scss" as *;
header{
    height: 70px;
    background-color: black;
    padding:0 1rem;
    @include display-flex(row,space-between,center,0);
    h1{
        color: red;
    }
    input{
        width: 25%;
        height: 40px;
        padding-left: 1rem;

    }
}

</style>