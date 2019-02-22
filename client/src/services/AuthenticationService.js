import Api from '@/services/Api'

export default {
  // Login
  signin (credentials) {
    return Api().post('/auth/signin', credentials)
  },
  // Register
  signup (credentials) {
    return Api().post('/auth/signup', credentials)
  }
}
