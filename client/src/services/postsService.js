import api from '@/services/api'

export default {
  index (credentials) {
    return api().get('posts')
  }
}

// authentication.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })
