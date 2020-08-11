<template>
    <div class="pfGraphicDesign container">
        <h3>Voici une selection de projets de création graphique</h3>
        <div class="select-cat">         
            <button @click="changeProjet('siteWeb')">Site Web</button>
            <button @click="changeProjet('logo')">Logos</button>
            <button @click="changeProjet('print')">Projets Print</button>   
        </div>
        <div class="galerie-photo" v-show="projet === 'logo'">
        <figure v-for="item in galerieLogo" :key="item.url">
            <a :href="item.url" :data-lightbox="item.lightBox" :data-title="item.alt">
            <img :src="item.source" :alt="item.alt">
            </a>
        </figure>
        </div>
        <div class="galerie-photo" v-show="projet === 'print'">
        <figure v-for="item in galeriePrint" :key="item.url">
            <a :href="item.url" :data-lightbox="item.lightBox" :data-title="item.alt">
            <img :src="item.source" :alt="item.alt">
            </a>
        </figure>
        </div>
        <div class="site-web" v-show="projet === 'siteWeb'">
            <figure>
                <a href="http://consoletcie.fr/" target="blank"><img src="/images/miniatures/site-web-consol.jpg" alt="Site internet Consol & Cie"></a>  
                <figcaption>Site - Consol & Cie</figcaption>
            </figure>
            <figure>
                <a href="https://www.bordeau-architecte.com/" target="blank"><img src="/images/miniatures/site-web-anais-bordeau.jpg" alt="Site internet Consol & Cie"></a>  
                <figcaption>Site - Anais Bordeau</figcaption>
            </figure>
            <figure>
                <a href="https://boutique-plumejeau.yep-studio.fr/" target="blank"><img src="/images/miniatures/site-web-plumejeau.jpg" alt="Site internet Consol & Cie"></a>  
                <figcaption>Site e-commerce - SAS Plumejeau</figcaption>
            </figure>
            <figure>
                <a href="https://www.wing-chun-angers.fr/" target="blank"><img src="/images/miniatures/site-web-WCA.jpg" alt="Site internet Consol & Cie"></a>  
                <figcaption>Site - Wing Chun ANgers</figcaption>
            </figure>
            <figure>
                <a href="https://www.yep-studio.fr" target="blank"><img src="/images/miniatures/site-web-yep.jpg" alt="Site internet Consol & Cie"></a>  
                <figcaption>Site - Yep !</figcaption>
            </figure>
        </div>
    </div>
</template>

<script>

import {mapState} from "vuex"

export default {
    name: "graphicDesign",
    data() {
        return {
            projet: 'siteWeb'
        }
    },
    methods: {
        changeProjet(projet){
            this.projet = projet
        }
    },    
    computed: {
    ...mapState({
      galerieLogo: 'galerieLogo',
      galeriePrint: 'galeriePrint'
    })
    }
}
</script>

<style lang="scss">

.pfGraphicDesign h3 {    
    text-align: center;
    font-weight: 300;
    color: #333333;
    font-size: 20px;
    padding: 30px 0 50px 0;
}

.galerie-photo {
    display: flex;    
    flex-wrap: wrap;
    justify-content: left;
    padding-bottom: 80px;
}

.galerie-photo figure {
    width: 33.333333%;
    overflow: hidden;
    place-items: center;
}

.site-web {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 50px;
    justify-content: center;
}

.site-web figure
{
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
    width: 300px;
    height: 255px;
    border: solid 8px #ffffff;
    box-shadow: 1px 1px 10px rgba($color: #2c2c2c, $alpha: 0.5);
    text-align: center; 
    transition: all 0.3s ease-in-out;
    img {
        width: 300px;
        height: 200px;
    }
    figcaption {
        background: #fdae10;
        height: 50px;
        color: #ffffff;
        font-size: 18px;
        line-height: 50px;
        font-weight: 200;
        padding: 0 5px;
    }
    a {
        text-decoration: none;
    }
    &:hover {        
        box-shadow: 1px 1px 10px #2c2c2c;
    }
}



$breakpoint-mobile: 1070px;

@media (max-width: $breakpoint-mobile) {
    .galerie-photo figure {
        width: 50%;
    }
}

.galerie-photo img {
    display: block;
    width: 100%;
    transition: all .5s ease-in-out;
    transform: scale(1.02);
}

.galerie-photo img:hover {
    transform: scale(1.1) rotate(3deg);
}

</style>