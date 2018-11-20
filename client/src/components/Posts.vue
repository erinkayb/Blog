<template>
  <v-container grid-list-xl text-md-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Blog Posts">
          <div v-for="post in posts" :key="post.id">
            <!-- key bind shows unique identifier for the post -->
            {{post.title}}
            {{post.date}}
            {{post.body}}
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import postsService from '@/services/postsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      posts: null
    }
  },
  async mounted () {
    // do a request to the backend for all posts
    this.posts = (await postsService.index()).data
  }
}
</script>

<style scoped>

</style>
