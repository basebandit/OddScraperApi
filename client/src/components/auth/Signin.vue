<template>

  <v-layout column blue justify-center align-center class="blue" dark>

    <particles></particles>
    <v-flex xs12 sm6 justify-center align-center>
      <v-card class="card--flex-toolbar blue darken-1" elevation-2 width="300">
        <div class="text-xs-center white--text">
          <router-link to="/">
            <img :src="getImgUrl('scrapehawk_logo_white.png')" alt="Scrapehawk">
          </router-link>
          <h1 class="mb-2 display-1 text-xs-center">Scrapehawk</h1>
        </div>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout column>
              <v-flex>
                <v-text-field label="E-mail" type="email" v-model="email" :rules="emailRules" color="white" class="white--text" dark required>
                </v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field label="Password" v-model="password" :append-icon="show1 ? 'visibility_off' : 'visibility'" :rules="passwordRules"
                  :type="show1 ? 'text' : 'password'" class="white--text" color="white" @click:append="show1 = !show1" @keyup.native.enter="signin"
                  dark required>
                </v-text-field>
              </v-flex>
              <v-flex>
                <div class="error" v-html="error"></div>
              </v-flex>
              <v-btn :disabled="!valid" class="white blue--text" dark @click="signin" ripple>
                Signin</v-btn>
              <v-flex class="my-2 text-xs-center white--text">
                <router-link class="white--text" to="/auth/signup">
                  <span>Don't have an account?</span>
                </router-link>
              </v-flex>
              <v-flex class="mb-2 text-xs-center white--text">
                <span>Forgot password</span>
              </v-flex>
            </v-layout>
          </v-form>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  import Particles from '@/components/background/Particles'
  export default {
    name: 'Signin',
    data () {
      return {
        show1: false,
        valid: true,
        email: '',
        password: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length > 8) || 'Invalid Password'
        ],
        error: null
      }
    },
    mounted () {
      // Fixes scrollber showing twice
      document.querySelector('html').style.overflow = 'hidden'
    },
    methods: {
      getImgUrl (img) {
        return require('@/assets/' + img)
      },
      signin () {
        try {
          if (this.$refs.form.validate()) {
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('signinUserInScrapehawkApi', { user: user, router: this.$router })
          }
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    components: {
      Particles
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
