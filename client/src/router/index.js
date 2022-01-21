import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'
import Booking from '../views/Booking.vue'
import ListBooking from '../views/ListBooking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    component: Booking
  },
  {
    path: '/list-booking',
    name: 'ListBooking',
    component: ListBooking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  if (to.name === 'Detail' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  if (to.name === 'ListBooking' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  if (to.name === 'Booking' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  if (to.name === 'Login' && localStorage.getItem('access_token')) next({ name: 'Home' })
  if (to.name === 'Register' && localStorage.getItem('access_token')) next({ name: 'Home' })
  else next()
})

export default router
