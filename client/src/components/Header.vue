<template>
    <v-toolbar fixed color="teal lighten-2" dark>

      <v-toolbar-title>
        <router-link class='colors' to="/">Bloggy</router-link>
      </v-toolbar-title>

      <!-- <v-toolbar-items>
        <v-btn flat dark>
          Browsers
        </v-btn>
      </v-toolbar-items> -->

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat dark>
          <router-link class='colors' to="register">Sign Up</router-link>
        </v-btn>
        <v-btn flat dark>
          <router-link class='colors' to="login">Login</router-link>
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.colors{
  color: white;
  text-decoration: none;
}
</style>
