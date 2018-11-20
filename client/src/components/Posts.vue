<template>
  <v-container grid-list-xl text-md-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Blog Posts" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
