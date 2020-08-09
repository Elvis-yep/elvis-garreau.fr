<template>
  <div class="app">
      <NavBar/>
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
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

</style>
