import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titreSite: "Elvis Garreau",
    nav: [
      {
        url: "#rencontrons-nous",
        linkName: "Rencontrons-nous"
      },
      {
        url: "#mes-realisations",
        linkName: "Mes réalisations"
      },
      {
        url: "#mon-projet",
        linkName: "Mon Projet"
      },
      {
        url: "#mes-competences",
        linkName: "Mes compétences"
      },
      {
        url: "#a-propos",
        linkName: "A propos"
      },
      {
        url: "#accueil",
        linkName: "Accueil"
      }      
    ] 
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
