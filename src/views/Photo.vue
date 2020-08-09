<template>
    <div class="pfPhoto container">
    <h3>Voici une selection de différents type de photographie que je réalise</h3>
    <div class="select-cat">
        <button @click="changeCategorie('corporate')">Corporate</button>
        <button @click="changeCategorie('event')">Event</button>
        <button @click="changeCategorie('workingArt')">Working Art</button>
        <button @click="changeCategorie('portraits')">Portraits</button>
        <button @click="changeCategorie('divers')">Divers</button>
    </div>
    <div class="galerie-photo corporate" v-show="categorie === 'corporate'">
        <figure v-for="item in galerieCorporate" :key="item.url">
            <a :href="item.url" :data-lightbox="item.lightBox" :data-title="item.alt">
            <img :src="item.source" :alt="item.alt">
            </a>
        </figure>
    </div>
    <div class="galerie-photo divers" v-show="categorie === 'divers'">
       <figure v-for="item in galerieDivers" :key="item.url">
            <a :href="item.url" :data-lightbox="item.lightBox" :data-title="item.alt">
            <img :src="item.source" :alt="item.alt">
            </a>
        </figure>
    </div>
    <div class="galerie-photo workingArt" v-show="categorie === 'workingArt'">
        <figure v-for="item in galerieWorkingArt" :key="item.url">
            <a :href="item.url" :data-lightbox="item.lightBox" :data-title="item.alt">
            <img :src="item.source" :alt="item.alt">
            </a>
        </figure>
    </div>
    <div class="galerie-photo event" v-show="categorie === 'event'">
        <figure v-for="item in galerieEvent" :key="item.url">
            <a :href="item.url" :data-lightbox="item.lightBox" :data-title="item.alt">
            <img :src="item.source" :alt="item.alt">
            </a>
        </figure>
    </div>
    <div class="galerie-photo portrait" v-show="categorie === 'portraits'">
        <figure v-for="item in galeriePortraits" :key="item.url">
            <a :href="item.url" :data-lightbox="item.lightBox" :data-title="item.alt">
            <img :src="item.source" :alt="item.alt">
            </a>
        </figure>
    </div>
</div>
</template>

<script>

import {mapState} from "vuex"

export default {
    name: "Photo",
    data() {
        return {
            categorie: 'corporate'
        }
    },
    methods: {
        changeCategorie(categorie){
            this.categorie = categorie
        }
    },
    computed: {
    ...mapState({
      galerieCorporate: 'galerieCorporate',
      galerieWorkingArt: 'galerieWorkingArt',
      galerieDivers: 'galerieDivers',
      galeriePortraits: 'galeriePortraits',
      galerieEvent: 'galerieEvent'
    })
    }
}
</script>

<style lang="scss">
.divers, .corporate, .workingArt, .event, .portrait {
    display: flex;    
    flex-wrap: wrap;
    justify-content: left;
    padding-bottom: 80px;
}

.pfPhoto h3 {
    text-align: center;
    font-weight: 300;
    color: #ffffff;
    font-size: 20px;
    padding: 30px 0 50px 0;
}

.select-cat button {
    font-weight: 300;
    color: #ffffff;
    outline: 0;
    border: 0;
    background-color: #fdae10;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    padding-right: 15px;
    transition: all 0.4s ease-in-out;
    &:hover {
        text-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.8);
    }
    &::after {
        content: ".";
        padding-left: 15px;
        font-weight: 500;
        font-size: 30px;
        position: relative;
        top: -4px;
    }
    &:last-child {
        padding-right: 0;
    }
    &:last-child::after {
        content: "";
    }
}

.galerie-photo figure {
    width: 33.333333%;
    overflow: hidden;
    place-items: center;
}

$breakpoint-mobile: 1080px;

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