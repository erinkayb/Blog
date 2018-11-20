<template lang="html">
  <div class="white elevation-2">
    <v-toolbar flat dense class='teal lighten-2' dark>
      <v-toolbar-title>
        {{title}}
      </v-toolbar-title>
    </v-toolbar>
    <div class='pl-4 pr-4 pt-4 pb-4'>
      <slot>
        No slot content defined
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
