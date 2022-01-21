<template>
  <div>
      <Navbar></Navbar>
      <div class="container">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/4.jpg" alt="" width="500px" height="50%" class="mx-auto d-block rounded-circle img-fluid">
                    <br>
                    <br>
                    <table class="table table-borderless">
                        <tr>
                            <th>Nama Category:</th>
                            <td>{{ categoryData ? categoryData.name : '' }}</td>
                        </tr>
                        <tr>
                            <th>Deskripsi:</th>
                            <td>{{ categoryData ? categoryData.description : '' }}</td>
                        </tr>
                    </table>
                </div>
                <div class="ml-auto mr-4 mb-4">
                    <router-link to="/" class="btn btn-outline-danger mr-1">Kembali</router-link>
                    <!-- <a href="#" class="btn btn-dark">Bookmark</a> -->
                </div>
            </div>
      </div>
      <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Detail',
  components: {
    Navbar,
    HFooter
  },
  created () {
    const id = this.$route.params.id
    console.log('create detail')
    this.$store.dispatch('categoryDetail', id)
  },
  computed: {
    categoryData () {
      return this.$store.state.categoryData
    }
  }
}
</script>

<style>

</style>
