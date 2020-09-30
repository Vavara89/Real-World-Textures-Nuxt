<template>
  <div class="login">
    <div class="login__wrap">
      <div class="container container--small">
        <h1 class="login__title">{{ title }}</h1>
        <div class="login__btn-wrap">
          <div @click="facebook" class="button-quaternary button-quaternary--blue">
            sign up by
            <b>facebook</b>
          </div>
          <div @click="google" class="button-quaternary button-quaternary--salmon">
            sing up by
            <b>google</b>
          </div>
        </div>
        <div class="login__divider">
          <span>or</span>
        </div>
        <form @submit="login" class="login__form">
          <div class="login__input" :class="{'login__input--filled': checkInputMail}">
            <input type="text" v-model="input.email">
            <label for>Email address</label>
            <form-input-errors v-if="hasErrors('email')" :errors="getErrors('email')"/>

          </div>
          <div class="login__input" :class="{'login__input--filled': checkInputPassword, 'iserror': hasErrors('password'), 'typeerror': hasErrors('email')}">
            <input type="password" v-model="input.password">
            <label for>Password</label>
            <form-input-errors v-if="hasErrors('password')" :errors="getErrors('password')"/>

          </div>
          <div class="login__link" :class="{'iserror': hasErrors('password')}">
            <nuxt-link to="/recovery">forgotten password?</nuxt-link>
          </div>
          <label class="login__checkbox" :class="{'login__checkbox--checked': rememberPassword}">
            <input type="checkbox" v-model="rememberPassword">Remember me
          </label>
          <div class="login__submit">
            <button :class="[isSubmitted ? 'loading' : '']" class="button-primary button-primary--large" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import FormInputErrors from '@/components/Forms/FormInputErrors'
import keysToCamel from "@/classes/keysToCamel.ts";

export default {
  components: {
    Button,
    FormInputErrors
  },
  data() {
    return {
      title: "Account Login",
      input: {
        email: "",
        password: "",
      },
      invalid: false,
      rememberPassword: false,
      isSubmitted: false,
      formErrors: {
        email:[],
        password: [],
      },
    };
  },
  methods: {
    async login(e) {
      this.cleanErrors();
      e.preventDefault();
      await this.$auth.loginWith('local', {
        data: {
          email: this.input.email,
          password: this.input.password
        }
      }).then(()=>{
        const authRefreshTokenLocal = this.$auth.$storage.getCookie('auth._refresh_token.local')
        const authTokenLocal = this.$auth.$storage.getCookie('auth._token.local')
        const authStrategy = this.$auth.$storage.getCookie('auth.strategy')
        let expire = process.env.LOGIN_REMEMBER_EXPIRED | 10;

        if(this.rememberPassword){
          const options = {
            'maxAge': 60*60*24 * expire,
            'path': '/'
          };
          this.$cookies.set('auth._refresh_token.local', authRefreshTokenLocal, options);
          this.$cookies.set('auth._token.local', authTokenLocal, options)
          this.$cookies.set('auth._token.local', authStrategy, options)
        }

      }).catch(errors => {
        if(errors.response.status === 400){
          const dataErrors = keysToCamel(errors.response.data);
          Object.keys(dataErrors).map((key)=>{this.formErrors[key] = dataErrors[key]});
        }
        if(errors.response.status === 401){
            this.formErrors['email'] = ['Login or password is incorrect'];
        }
      }).finally(()=>{
        this.isSubmitted = false;
      });
    },
    facebook () {
      this.$auth.loginWith('facebook');
    },
    google () {
      this.$auth.loginWith('google');
    },
    hasErrors(input) {
      return this.getErrors(input).length > 0;
    },

    getErrors(input) {
      return this.formErrors[input].length ? this.formErrors[input] : [];
    },
    cleanErrors() {
      Object.keys(this.formErrors).map((key) => this.cleanError(key));
    },
    cleanError(input) {
      this.formErrors[input] = [];
    },
  },
  computed: {
    checkInputMail() {
      if (this.input.email.length > 0) {
        return true;
      }
      return false;
    },
    checkInputPassword() {
      if (this.input.password.length > 0) {
        return true;
      }
      return false;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/login.scss";
</style>
