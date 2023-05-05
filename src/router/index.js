import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgenciaAzucar from '../views/AgenciaAzucar.vue'
import CompraArticulos from '../views/CompraArticulos.vue'
import InteresBasico from '../views/InteresBasico.vue'
import LanzamientoDados from '../views/LanzamientoDados.vue'
import GallinaPonedora from '../views/GallinaPonedora.vue'
import MinimizarNumeros from '../views/MinimizarNumeros.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/agencia_azucar',
    name: 'agencia_azucar',
    component: AgenciaAzucar
  },
  {
    path: '/compra_articulos',
    name: 'compra_articulos',
    component: CompraArticulos
  },
  {
    path: '/interes_basico',
    name: 'interes_basico',
    component: InteresBasico
  },
  {
    path: '/lanzamiento_dados',
    name: 'lanzamiento_dados',
    component: LanzamientoDados
  },
  {
    path: '/minimizar_numeros',
    name: 'minimizar_numeros',
    component: MinimizarNumeros
  },
  {
    path: '/gallina_ponedora',
    name: 'gallina_ponedora',
    component: GallinaPonedora
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
