import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CollectionView from '../views/CollectionView.vue'
import ContactView from '../views/ContactView.vue'
import CarDetailView from '../views/CarDetailView.vue'
import CartView from '../views/cartView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import ShippingInfoView from '../views/ShippingInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/car/:id',
      name: 'viewdetail',
      component: CarDetailView
    },
    {
      path: '/car/cart/:id',
      name: 'CartView',
      component: CartView
    },
    {
      path: '/car/cart/User/:id',
      name: 'UserInfoView',
      component: UserInfoView
    },
    {
      path: '/car/cart/User/shipping/:id',
      name: 'ShippingInfoView',
      component: ShippingInfoView
    },
  ]
})

export default router
