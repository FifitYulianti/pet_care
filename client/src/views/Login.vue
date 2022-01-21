<template>
  <!-- Login -->
    <div class="auth mb-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-7 col-lg-8">
                    <div class="card">
                        <div class="card-body p-0">
                            <!-- Nested Row within Card Body -->
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <form>
                                            <h3 class="text-primary">SIGN IN</h3>
                                            <br>
                                            <div class="form-group">
                                                <input type="email" class="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" placeholder="Enter email" v-model="data.email">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" id="exampleInputPassword1"
                                                    placeholder="Password" v-model="data.password">
                                            </div>
                                            <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                                            <div class="form-group my-4">
                                                <router-link @click.native="login" to='/' class="btn btn-outline-primary form-control">
                                                    SIGN IN</router-link>
                                            </div>
                                        </form>
                                        <div class="text-center">
                                            <router-link class="small" to='/register'>Create an
                                                Account!</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Login -->
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.data)
    }
  }
}
</script>

<style>
.bg-login-image {
    background: url("https://i.pinimg.com/originals/cc/85/99/cc8599f4a81578ce7d7d668e62c31f4a.jpg");
    background-position: center;
    background-size: cover;
}
/* .card {
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
} */
</style>
