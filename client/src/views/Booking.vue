<template>
  <div>
      <Navbar></Navbar>
      <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7 col-lg-5">
                    <div class="card">
                        <div class="card-body">
                            <form enctype="multipart/form-data" @submit.prevent="addBooking">
                                <h3 class="text-primary">ADD BOOKING</h3>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputPetName"
                                        placeholder="Enter Pet Name" v-model='petName'>
                                </div>
                                <div class="form-group">
                                    <input type="date" class="form-control" id="exampleInputSchedule"
                                     v-model='schedule'>
                                </div>
                                <div class="form-group">
                                <input
                                    type="file"
                                    class="form-control-user"
                                    id="inputImage"
                                    placeholder="Input New Image"
                                    name="imgUrl"
                                    @change="handleImage"
                                />
                                </div>
                                <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputCategory"
                                        placeholder="Enter Jadwal" v-model='IdCategory'>
                                </div>
                                <button class="btn btn-outline-primary form-control text-primary">Submit</button>
                                <br><br>
                                <router-link to='/' class="btn btn-outline-danger form-control">Cancel</router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Navbar from '@/components/Navbar.vue'
// import { mapState } from 'vuex'
export default {
  name: 'Booking',
  components: {
    Navbar,
    HFooter
  },
  data () {
    return {
      petName: '',
      schedule: '',
      file: '',
      IdCategory: ''
    }
  },
  created () {
    const IdCategory = this.$route.params.id
    this.IdCategory = IdCategory
  },
  methods: {
    handleImage (e) {
      const [file] = e.target.files
      this.file = file
    },
    addBooking () {
      const data = {
        petName: this.petName,
        schedule: this.schedule,
        imgUrl: this.file,
        IdCategory: this.IdCategory
      }
      this.$store.dispatch('addBooking', data)
    }
  }
}
</script>

<style>

</style>
