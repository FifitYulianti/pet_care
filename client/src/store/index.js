import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    categoryData: {},
    IdCategory: null,
    bookings: []
  },
  mutations: {
    FETCH_CATEGORY (state, payload) {
      state.categories = payload
    },
    DETAIL_CATEGORY (state, payload) {
      state.categoryData = payload
    },
    DATA_TO_FORM_BOOKING (state, payload) {
      state.IdCategory = payload.IdCategory
    },
    FETCH_BOOKING (state, payload) {
      state.bookings = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: `${baseUrl}/login`,
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          // context.commit('CHANGE_LOGIN_DATA', { access_token: true, status: true })
          router.push('/').catch(() => {})
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Login Success, plese check your email!'
          })
        })
        .catch((err) => {
          console.log(err.response)
          Swal.fire(`${err.response.data.error}`)
        })
    },
    register (contex, payload) {
      console.log(payload, 'register')
      axios({
        url: `${baseUrl}/register`,
        method: 'POST',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          noHp: payload.noHp,
          address: payload.address
        }
      })
        .then((data) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Register Success, plese check your email!'
          })
          router.push('/login')
        })
        .catch((err) => {
          console.log(err.response)
          Swal.fire(`${err.response.data.error}`)
        })
    },
    fetchCategory (context) {
      console.log('store')
      axios({
        url: `${baseUrl}/categories`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_CATEGORY', data.categories)
        })
        .catch(err => {
          Swal.fire(`${err.response.data.error}`)
        })
    },
    categoryDetail (context, id) {
      console.log(id)
      axios({
        url: `${baseUrl}/categories/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, 'data detail')
          context.commit('DETAIL_CATEGORY', data.category)
        })
        .catch(err => {
          Swal.fire(`${err.response.data.error}`)
        })
    },
    // handleImage(e) {
    //   const [file] = e.target.files;
    //   this.addTransportation.file = file;
    // },
    addBooking (context, payload) {
      const formData = new FormData()

      formData.append('petName', payload.petName)
      formData.append('schedule', payload.schedule)
      formData.append('imgUrl', payload.imgUrl)
      formData.append('IdCategory', payload.IdCategory)
      axios({
        method: 'POST',
        url: `${baseUrl}/bookings/${payload.IdCategory}`,
        data: formData,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((data) => {
          console.log(data)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Booking Success please check you email!'
          })
          router.push('/list-booking')
        })
        .catch((err) => {
          console.log(err.response)
          Swal.fire(`${err.response.data.error}`)
        })
    },
    fetchBooking (context) {
      console.log('store')
      axios({
        url: `${baseUrl}/bookings`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data.bookings[0].imgUrl)
          context.commit('FETCH_BOOKING', data.bookings)
        })
        .catch(err => {
          Swal.fire(`${err.response.data.error}`)
        })
    },
    delete (context, id) {
      console.log('delete')
      axios({
        url: `${baseUrl}/bookings/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetchBooking', null)
        })
        .catch(err => {
          console.log(err)
          Swal.fire(`${err.response.data.error}`)
        })
    },
    generateData (context, id) {
      console.log(id)
      axios({
        url: `${baseUrl}/bookings/${id}/pdf-convert`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data.booking.petName)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'PDF Downloaded Success',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          Swal.fire(`${err.response.data.error}`)
        })
    }
  },
  modules: {
  }
})
