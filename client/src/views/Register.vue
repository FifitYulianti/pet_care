<template>
  <div class="auth">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7 col-lg-5">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <h3 class="text-primary">SIGN UP</h3>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputUsename"
                                        placeholder="Enter Name" v-model='name'>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter email" v-model='email'>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="Password" v-model='password'>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputPhoneNumber"
                                        placeholder="Enter Phone Number" v-model='noHp'>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputAddress"
                                        placeholder="Enter Address" v-model='address'>
                                </div>
                                <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                                <div class="form-group my-4">
                                    <a @click.prevent='registerHandler' href="#" class="btn btn-outline-primary form-control text-primary">Create An Account</a>
                                    <br><br>
                                    <router-link to='/login' class="btn btn-outline-danger form-control">Cancel</router-link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      password: '',
      email: '',
      noHp: '',
      address: ''
    }
  },
  methods: {
    registerHandler () {
      const data = {
        name: this.name,
        password: this.password,
        email: this.email,
        noHp: this.noHp,
        address: this.address
      }
      console.log(data, 'register vue')
      this.$store.dispatch('register', data)
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
</style>
