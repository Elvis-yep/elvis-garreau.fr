<template>   
  <div class="nav">
    <div class="navbar">
      <h3 class="titre-site">{{ titreSite }}</h3>
      <ul class="navbar-list" v-for="item in nav" :key="item.linkName">
        <li class="nav-item"><a class="nav-link" :href="item.url">{{ item.linkName }}</a></li>
      </ul>
      <div class="burger-menu">
        <button class="burger-button" @click="changeVisibility('visible')"><img src="/images/burger-menu.png" alt="burger menu"></button>
          <ul class="burger-list" v-for="item in nav" :key="item.linkName" v-show="menuVisible === 'visible'">
            <li class="burger-item"><a @click="changeVisibility('nonVisible')" class="burger-link" :href="item.url">{{ item.linkName }}</a></li>
          </ul>
      </div>
    </div>
  </div>
  
</template>

<script>

import {mapState} from "vuex"

export default {
    name: "NavBar",
    data() {
      return {
        menuVisible: 'nonVisible'
      }
    },
    computed: {
      ...mapState({
        titreSite: 'titreSite',
        nav: 'nav',      
    })
    },
    methods: {
      changeVisibility(menuVisible) {
        this.menuVisible = menuVisible
      }
    }
}
</script>
    
<style lang="scss">

.navbar {
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, .6);
    height: 50px;
    line-height: 50px;
    z-index: 999;
}

.titre-site{
    float: left;
    font-family: zooja-pro,sans-serif;
    font-weight: 300;
    padding-left: 40px;
    color: #ffffff;
    font-size: 40px;
}

.navbar-list {
  float: right;
}



.burger-menu {
  display: none;
  float: right;
  text-align: right;
  padding-right: 40px;
}

$breakpoint-mobile: 1080px;

@media (max-width: $breakpoint-mobile) {
  .burger-menu{
    display: block;
  }

  .navbar-list {
    display: none;
  }
  
}
.burger-button {
  border: 0;
  outline: 0;
  background-color: rgba($color: #000000, $alpha: 0);
  height: 50px;
  width: 40px;
  cursor: pointer;
}

.burger-button img {
  height: 100%;
  width: 100%;
}

.burger-list {
  display: flex;
  top: 0;
  flex-direction: column-reverse;
  background-color: rgba(0, 0, 0, .6);
  padding: 0 15px;
}

.burger-item {
  display: flex;
  list-style: none;
}

.burger-link {
  display: flex;
  text-decoration: none;
  color: #ffffff;
}

.nav-item {
    display: table-cell;
    padding-right: 50px;
    color: #fdae10;
    font-weight: 300;
    font-size: 17px;
}

.nav-link {
  
    font-size: 16px;
    font-weight: 200;
    text-decoration: none;
    color: #ffffff;
    transition: all .4s ease;
}

.nav-link:hover {
    border-bottom: solid 3px #fdae10;
    padding-bottom: 14px;
}
</style>