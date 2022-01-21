<template>
  <div>
      <Navbar></Navbar>
      <div class="row mt-4 mr-3 ml-5">
      <CardListBooking v-for="(data, index) in bookings" :key="index" :booking='data'></CardListBooking>
      </div>
      <HFooter></HFooter>
  </div>
</template>

<script>
import CardListBooking from '@/components/CardListBooking.vue'
import HFooter from 'vue-hacktiv8-footer'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'ListBooking',
  components: {
    CardListBooking,
    Navbar,
    HFooter
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('fetchBooking')
    }
  },
  computed: {
    bookings () {
      console.log('home')
      return this.$store.state.bookings
    }
  }
}
</script>

<style>

</style>
