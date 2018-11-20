<template>
  <v-container grid-list-xl text-md-center>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <panel title="Blog Posts">
          <router-link slot="action" :to="{ name: 'posts-create' }">
            <v-btn fab class='teal lighten-3' dark small absolute right middle>
              <v-icon>
                add
              </v-icon>
            </v-btn>
          </router-link>
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
