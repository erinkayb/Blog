<template>
  <div>
    <h1>register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Email">
      <br/>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Password">
      <br/>
    <button type="button"
      name="button"
      @click="register">
      Register
    </button>
  </div>
</template>

<script>
import authService from '@/services/auth'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const responseAuth = await authService.register({
        email: this.email,
        password: this.password
      })
      console.log(responseAuth.data)
    }
  }
}
</script>

<style scoped>

</style>
