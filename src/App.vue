<template>
  <div class="app">
    <div class="nav">
      <div class="navbar">
        <h2 class="titre-site">{{ titreSite }}</h2>
        <NavBar
          v-for="item in nav"
          :url="item.url"
          :linkName="item.linkName"
          :key="item.linkName"
        />
      </div>
    </div>
      <Header />
      <APropos />
      <MesCompetences />
      <MonProjet />
      <MesRealisations />
      <Contact />
      <Footer />
  </div>
</template>

<script>

import NavBar from "./components/NavBar"
import Header from "./components/Header"
import APropos from "./components/APropos"
import MesCompetences from "./components/MesCompetences"
import MonProjet from "./components/MonProjet"
import MesRealisations from "./components/MesRealisations"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import {mapState} from "vuex"

export default {
  name: 'App',
  components: {
    NavBar,
    Header,
    APropos,
    MesCompetences,
    MonProjet,
    MesRealisations,
    Contact,
    Footer
  },
  computed: {
    ...mapState({
      titreSite: 'titreSite',
      nav: 'nav',      
      
    })
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

</style>
