<template>
  <div class="card mr-3 ml-3" style="width: 16rem">
        <img
        :src="booking.imgUrl"
        class="card-img-top"
        alt="..."
        height="190px"
        />
        <div class="card-body bg-light">
        <h5 class="card-title">{{booking.petName}}</h5>
        <p class="card-text">{{booking.Category.name}}</p>
        <p class="card-text">Jadwal : {{(new Date(booking.schedule)).toISOString().split('T')[0]}}</p>
        <p class="card-text">Harga : Rp {{booking.harga}}</p>
        <br />
        <div>
          <!-- <li @click.prevent=""><router-link :to="`/booking/${booking.id}`" @click.native="`delete(${booking.id})`" class="btn btn-outline-danger mr-1" > Edit </router-link></li> -->
          <a @click.prevent="deleteBooking(booking.id)" href='#' class="btn btn-outline-danger mr-1" > Delete </a>
          <!-- <router-link :to="`/booking/${booking.id}`" class="btn btn-outline-dark" > Download </router-link> -->
          <router-link to="" @click.native="generateData(booking.id)">Convert to PDF<i class="fas fa-download"></i></router-link>
        </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'CardListBooking',
  props: ['booking'],
  methods: {
    deleteBooking (id) {
      console.log('hai delete')
      this.$store.dispatch('delete', id)
    },
    generateData (id) {
      console.log(id, 'haloooo')
      this.$store.dispatch('generateData', id)
    }
  }
}
</script>

<style>

</style>
