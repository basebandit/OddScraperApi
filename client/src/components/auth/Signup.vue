<template>

  <v-layout column blue justify-center align-center dark id="auth-sn">
    <!-- <v-flex xs8 offset-xs4> -->
    <particles></particles>

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
              <v-text-field label="Email" class="white--text" type="email" v-model="email" :rules="rules.emailRules" color="white" dark
                required>
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field label="Password" hint="At least 10 characters" :append-icon="show1 ? 'visibility_off' : 'visibility'" :type="show1 ? 'text': 'password'"
                v-model="password" :rules="rules.passwordRules" counter class="white--text" @click:append="show1 = !show1"
                color="white" dark>
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field label="Confirm
              Password" v-model="confirmPassword" :append-icon="show2 ? 'visibility_off' : 'visibility'" :type="show2 ? 'text' : 'password'"
                :rules="rules.passwordConfirmationRules" color="white" counter class="white--text" @click:append="show2 = !show2"
                dark>
              </v-text-field>
            </v-flex>
            <v-flex>
              <div class="error" v-html="error"></div>
            </v-flex>
            <v-flex>
              <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required dark color="white"></v-checkbox>
            </v-flex>
            <v-btn :disabled="!valid" large class="white blue--text" dark @click="signup" ripple>
              Signup</v-btn>
            <v-flex class="my-2 text-xs-center white--text">
              <router-link class="white--text" to="/auth/signin">
                <span>Already have an account?</span>
              </router-link>
            </v-flex>
          </v-layout>
        </v-form>
      </div>
    </v-card>
    <!-- </v-flex> -->
  </v-layout>

</template>
<script>
  import Particles from '@/components/background/Particles'
  // import AuthenticationService from '@/services/AuthenticationService'
  export default {
    name: 'Signup',
    data () {
      return {
        show1: false,
        show2: false,
        valid: true,
        email: '',
        password: '',
        confirmPassword: '',
        rules: {
          passwordConfirmationRules: [
            v => !!v || 'Confirm your password',
            v => v === this.password || 'Password must match'],
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 8) || 'Password must not be less than 8 characters'
          ]
        },

        checkbox: false,
        error: null
      }
    },
    mounted () {
      // Fixes scrollbar showing twice
      document.querySelector('html').style.overflow = 'hidden'
    },
    components: {
      Particles
    },
    methods: {
      getImgUrl (img) {
        return require('@/assets/' + img)
      },
      signup () {
        try {
          if (this.$refs.form.validate()) {
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('signupUserInScraperhawkApi', { user: user, router: this.$router })
          }
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }

  /* #auth-sn {
    position: relative;

  } */
</style>
