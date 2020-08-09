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
        url: "images/large/corporate/photo-13.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/corporate/photo-13.jpg",
        alt: "Corporate - séance de travail"
      },
      {
        url: "images/large/corporate/photo-14.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/corporate/photo-14.jpg",
        alt: "Corporate - séance de travail"
      },
      {
        url: "images/large/corporate/photo-15.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/corporate/photo-15.jpg",
        alt: "Corporate - séance de travail"
      },
      {
        url: "images/large/corporate/photo-16.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/corporate/photo-16.jpg",
        alt: "Corporate - séance de travail"
      },
      {
        url: "images/large/corporate/photo-46.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/corporate/photo-46.jpg",
        alt: "Corporate - séance de travail"
      },
      {
        url: "images/large/corporate/photo-47.jpg",
        lightBox: "coprorate",
        source: "images/miniatures/corporate/photo-47.jpg",
        alt: "Corporate - séance de travail"
      }
    ],
    galerieEvent: [
      {
        url: "images/large/event/photo-34.jpg",
        lightBox: "event",
        source: "images/miniatures/event/photo-34.jpg",
        alt: "Event - weforge"
      },
      {
        url: "images/large/event/photo-48.jpg",
        lightBox: "event",
        source: "images/miniatures/event/photo-48.jpg",
        alt: "Event SWAngers"
      },
      {
        url: "images/large/event/photo-49.jpg",
        lightBox: "event",
        source: "images/miniatures/event/photo-49.jpg",
        alt: "Event SWAngers"
      },{
        url: "images/large/event/photo-50.jpg",
        lightBox: "event",
        source: "images/miniatures/event/photo-50.jpg",
        alt: "Event SWAngers"
      },
      {
        url: "images/large/event/photo-51.jpg",
        lightBox: "event",
        source: "images/miniatures/event/photo-51.jpg",
        alt: "Event SWAngers"
      },
      {
        url: "images/large/event/photo-52.jpg",
        lightBox: "event",
        source: "images/miniatures/event/photo-52.jpg",
        alt: "Event SWAngers"
      }
    ],
    galerieWorkingArt: [
      {
        url: "images/large/workingArt/photo-2.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/workingArt/photo-2.jpg",
        alt: "The art of StringArt"
      },
      {
        url: "images/large/workingArt/photo-3.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/workingArt/photo-3.jpg",
        alt: "The art of StringArt"
      },
      {
        url: "images/large/workingArt/photo-4.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/workingArt/photo-4.jpg",
        alt: "The art of Stained Glass"
      },
      {
        url: "images/large/workingArt/photo-6.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/workingArt/photo-6.jpg",
        alt: "The art of Stained Glass"
      },
      {
        url: "images/large/workingArt/photo-41.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/workingArt/photo-41.jpg",
        alt: "The art of Tatoo"
      },
      {
        url: "images/large/workingArt/photo-45.jpg",
        lightBox: "workingArt",
        source: "images/miniatures/workingArt/photo-45.jpg",
        alt: "The art of Tatoo"
      }
    ],
    galeriePortraits: [
      {
        url: "images/large/portraits/photo-5.jpg",
        lightBox: "portraits",
        source: "images/miniatures/portraits/photo-5.jpg",
        alt: "Portrait Mickael"
      },
      {
        url: "images/large/portraits/photo-9.jpg",
        lightBox: "portraits",
        source: "images/miniatures/portraits/photo-9.jpg",
        alt: "Portrait Sébastien"
      },
      {
        url: "images/large/portraits/photo-12.jpg",
        lightBox: "portraits",
        source: "images/miniatures/portraits/photo-12.jpg",
        alt: "Portrait Emma"
      },
      {
        url: "images/large/portraits/photo-22.jpg",
        lightBox: "portraits",
        source: "images/miniatures/portraits/photo-22.jpg",
        alt: "Portrait Manon"
      },
      {
        url: "images/large/portraits/photo-23.jpg",
        lightBox: "portraits",
        source: "images/miniatures/portraits/photo-23.jpg",
        alt: "Portrait Yohan"
      },
      {
        url: "images/large/portraits/photo-53.jpg",
        lightBox: "portraits",
        source: "images/miniatures/portraits/photo-53.jpg",
        alt: "Portrait Marine"
      }
    ],
    galerieDivers: [
      {
        url: "images/large/divers/photo-10.jpg",
        lightBox: "divers",
        source: "images/miniatures/divers/photo-10.jpg",
        alt: "montre"
      },
      {
        url: "images/large/divers/photo-11.jpg",
        lightBox: "divers",
        source: "images/miniatures/divers/photo-11.jpg",
        alt: "montre"
      },
      {
        url: "images/large/divers/photo-18.jpg",
        lightBox: "divers",
        source: "images/miniatures/divers/photo-18.jpg",
        alt: "livre ouvert"
      },
      {
        url: "images/large/divers/photo-19.jpg",
        lightBox: "divers",
        source: "images/miniatures/divers/photo-19.jpg",
        alt: "déco"
      },
      {
        url: "images/large/divers/photo-38.jpg",
        lightBox: "divers",
        source: "images/miniatures/divers/photo-38.jpg",
        alt: "Lights"
      },
      {
        url: "images/large/divers/photo-42.jpg",
        lightBox: "divers",
        source: "images/miniatures/divers/photo-42.jpg",
        alt: "outils du tatoueur"
      },
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
