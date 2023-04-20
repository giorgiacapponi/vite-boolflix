<script>
export default {
    name: "AppCard",
    props: {
        image: String,
        title: String,
        originalTitle: String,
        voto: String,
        language: String,
        overview:String

    },
    data() {
        return {
            description: false,
        }
    },
    methods: {
        showInfo() {
          this.description=!this.description  



        },
        showPhoto(){
            this.description=false
           
        }

    }


}
</script>
<template>
    <div class="card" @mouseleave="showPhoto()" >
        <ul v-if="description" >
            
                <!-- titolo:{{ serie.name }} <br>
                    titolo originale:{{ serie.original_name }} <br>
                    lingua: <img :src="`https://flagcdn.com/16x12/${serie.original_language}.png`" :srcset="`https://flagcdn.com/32x24/${serie.original_language}.png 2x,
                            https://flagcdn.com/48x36/${serie.original_language}.png 3x`" width="16" height="12" :alt="Sudafrica"><br>
                    voto:{{ serie.vote_average }}
                  -->
            <li> <span>titolo:</span> {{ title }}</li>
            <li> <span> titolo originale:</span>{{ originalTitle }} </li>
            <li> <span>lingua: </span> <img :src="`https://flagcdn.com/16x12/${language}.png`" :srcset="`https://flagcdn.com/32x24/${language}.png 2x,
                                        https://flagcdn.com/48x36/${language}.png 3x`" width="16" height="12" alt=""></li>
            <li><span>voto:</span>{{ voto }}</li>
            <li><span>Overview</span>{{ overview }}</li>


        
        </ul>
        <img :src="image" alt="" v-else @mouseenter="showInfo()">

    </div>
</template>

<style scoped lang="scss">

.card {
    background-color: black;
    color: white;
    width: 342px;
    height: 100%;
    overflow-y: auto;

    ul {
        padding:5rem 1rem;
        list-style-type: none;

        li {
            span{
                font-size: 1.5rem;
            }
        }
    }
}
</style>