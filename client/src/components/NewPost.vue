<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Create Your Post">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          box
          v-model="post.title"
        ></v-text-field>
        <v-textarea
          label="Body"
          required
          :rules="[required]"
          box
          auto-grow
          rows="3"
          v-model="post.body"
        ></v-textarea>
      </panel>
    </v-flex>
    <v-flex xs6>
      <panel title="Add an Image" class="ml-4">
        <v-text-field
          label="Image URL"
          box
          v-model="post.image"
        ></v-text-field>
      </panel>

      <div class="error-alert" v-if="error">{{error}}</div>

      <v-btn class='teal lighten-2 mt-5' dark
        @click="create">
        Create Post
      </v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import postsService from '@/services/postsService'
export default {
  data () {
    return {
      post: {
        title: null,
        date: null,
        body: null,
        image: null
      },
      error: null,
      required: (value) => !!value || 'Required!'
    }
  },
  methods: {
    async create () {
      this.error = null
      const fieldsChecker = Object.keys(this.post).every(key => !!this.post[key])
      if(!fieldsChecker) {
        this.error = 'Please fill in all required fields.'
        return
      }

      try {
      // call api
        await postsService.post(this.post)
        this.$router.push({
          name: 'posts'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style lang="css">
</style>
