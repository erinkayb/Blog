import api from '@/services/api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  },
  login (credentials) {
    return api().post('login', credentials)
  }
}

// authentication.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })
