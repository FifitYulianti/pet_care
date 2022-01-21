<template>
<div>
  <Navbar></Navbar>
  <div class="home">
    <div>
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="../assets/1.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/3.jpg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
      </div>
      <div class="row mt-4 mr-3 ml-5">
      <CardCategory v-for="(data, index) in categories" :key="index" :category='data'></CardCategory>
      </div>
    </div>
  </div>
  <HFooter></HFooter>
</div>
</template>

<script>
// @ is an alias to /src
import CardCategory from '@/components/CardCategory.vue'
import HFooter from 'vue-hacktiv8-footer'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    CardCategory,
    Navbar,
    HFooter
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('fetchCategory')
    }
  },
  computed: {
    categories () {
      console.log('home')
      return this.$store.state.categories
    }
  }
}
</script>
<style>
.card {
    margin-top: 10px;
    margin-bottom: 10px;
}
.row .card:hover{
    box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
    transform: scale(1.02);
}
.auth{
    padding: 10px;
    margin-top: 3.5rem;
}
.auth .card{
    box-shadow: -8px 12px 18px rgb(25,42,70,0.13);
    margin-bottom: 2.2rem;
    margin-top: 3.5rem;
    border-radius: 2px;
    padding: 20px;
}
.auth h3{
    text-align: center;
    font-weight: 600;
}
.carousel-inner{
  width:100%;
  max-height: 400px !important;
}
</style>
