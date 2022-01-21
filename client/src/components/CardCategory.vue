<template>
  <div class="card mr-3 ml-3" style="width: 16rem">
        <img
        src="../assets/4.jpg"
        class="card-img-top"
        alt="..."
        height="190px"
        />
        <div class="card-body bg-light">
        <h5 class="card-title">{{category.name}}</h5>
        <p class="card-text">{{category.description}}</p>
        <br />
        <div>
          <router-link :to="`/detail/${category.id}`" class="btn btn-outline-primary mr-1 fixed"
            >Detail</router-link>
          <router-link :to="`/booking/${category.id}`" class="btn btn-outline-dark" > Booking </router-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardCategory',
  props: ['category'],
  methods: {
    // getDataToBooking (IdCategory) {
    //   this.$store.commit('DATA_TO_FORM_BOOKING', { IdCategory })
    // }
  }
}
</script>

<style>
</style>
