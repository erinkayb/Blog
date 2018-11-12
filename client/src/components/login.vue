<template>
  <v-container grid-list-xl text-md-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class='teal lighten-2' dark>
            <v-toolbar-title>
              Login
            </v-toolbar-title>
          </v-toolbar>
          <div class='pl-4 pr-4 pt-4 pb-4'>
            <v-flex>
              <v-text-field
                label="Email"
                box
                v-model="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                box
                v-model="password"
              ></v-text-field>
            </v-flex>

            <div class="error" v-html='error'></div>
            <v-btn class='teal lighten-2' dark
              @click="login">
              login
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import authService from '@/services/auth'
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
        await authService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
