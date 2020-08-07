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
    ],
    galerieCorporate: [
      {
        url: "images/large/photo-10.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/photo-10.jpg",
        alt: "Corporate - séance de travail"
      },
      {
        url: "images/large/photo-11.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/photo-11.jpg",
        alt: "Corporate - séance de travail"
      },
      {
        url: "images/large/photo-12.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/photo-12.jpg",
        alt: "Corporate - séance de travail"
      }
    ],
    galerieWorkingArt: [
      {
        url: "images/large/photo-20.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-20.jpg",
        alt: "The art of Tatoo"
      },
      {
        url: "images/large/photo-21.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-21.jpg",
        alt: "The art of Tatoo"
      },
      {
        url: "images/large/photo-22.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-22.jpg",
        alt: "The art of Tatoo"
      },
      {
        url: "images/large/photo-3.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-3.jpg",
        alt: "The art of Stained Glass"
      },
      {
        url: "images/large/photo-4.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-4.jpg",
        alt: "The art of Stained Glass"
      },
      {
        url: "images/large/photo-5.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-5.jpg",
        alt: "The art of Stained Glass"
      },
      {
        url: "images/large/photo-7.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-7.jpg",
        alt: "The art of Stained Glass"
      },
      {
        url: "images/large/photo-1.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-1.jpg",
        alt: "The art of StringArt"
      },
      {
        url: "images/large/photo-2.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/photo-2.jpg",
        alt: "The art of StringArt"
      }
    ],
    galerieDivers: [
      {
        url: "images/large/photo-16.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-16.jpg",
        alt: "salon de coiffure"
      },
      {
        url: "images/large/photo-17.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-17.jpg",
        alt: "salon de coiffure"
      },
      {
        url: "images/large/photo-18.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-18.jpg",
        alt: "salon de coiffure"
      },
      {
        url: "images/large/photo-8.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-8.jpg",
        alt: "montre"
      },
      {
        url: "images/large/photo-9.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-9.jpg",
        alt: "montre"
      },
      {
        url: "images/large/photo-13.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-13.jpg",
        alt: "lumières"
      },
      {
        url: "images/large/photo-14.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-14.jpg",
        alt: "salon de coiffure"
      },
      {
        url: "images/large/photo-15.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-15.jpg",
        alt: "montre"
      },
      {
        url: "images/large/photo-19.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-19.jpg",
        alt: "lumières"
      },
      {
        url: "images/large/photo-23.jpg",
        lightBox: "divers",
        source: "images/miniatures/photo-23.jpg",
        alt: "salon de coiffure"
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
