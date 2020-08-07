import Vue from 'vue'
import VueRouter from 'vue-router'
import Photo from '../views/Photo.vue'
import graphicDesign from '../views/graphicDesign.vue'
import Video from '../views/Video.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/graphicDesign',
    name: 'graphicDesign',
    component: graphicDesign
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
