<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
            <a
            class="navbar-brand font-weight-bold text-white"
            style="font-size: 30px"
            >PET CARE</a
            >
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-4">
                <li class="nav-item active">
                <router-link class="nav-link text-white" to='/'
                    >Home <span class="sr-only">(current)</span></router-link
                >
                </li>
                <li class="nav-item active">
                <router-link class="nav-link text-white" to='/list-booking'
                    >MyBooked<span class="sr-only">(current)</span></router-link
                >
                </li>
                <li class="nav-item active">
                <a class="nav-link text-white" @click.prevent="logout" href='#'
                    >Logout <span class="sr-only">(current)</span></a
                >
                </li>
                <!-- <li class="nav-item active" v-if="checkLogin === true">
                <router-link class="nav-link btn btn-outline-dark far fa-bookmark mr-3 ml-3" data-toggle="tooltip"
                    title="Bookmark" to='/bookmark'
                    > Bookmark <span class="sr-only">(current)</span></router-link
                >
                </li> -->
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      // this.$store.commit('CHANGE_LOGIN_DATA', { access_token: '', status: false })
      localStorage.removeItem('access_token')
      this.$router.push('/Login')
    }
  }
}
</script>
