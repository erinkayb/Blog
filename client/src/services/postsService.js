import api from '@/services/api'

export default {
  index () {
    return api().get('posts')
  },
  post (post) {
    return api().post('posts', post)
  }
}

// authentication.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })
