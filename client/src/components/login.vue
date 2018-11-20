<template>
  <v-container grid-list-xl text-md-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Login">
            <v-flex>
              <v-text-field
                label="Email"
                box
                v-model="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                box
                v-model="password"
              ></v-text-field>
            </v-flex>

            <div class="error" v-html='error'></div>
            <v-btn class='teal lighten-2' dark
              @click="login">
              login
            </v-btn>
          </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import auth from '@/services/auth'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        // authenticate to make sure email exsists in db
        const response = await auth.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
