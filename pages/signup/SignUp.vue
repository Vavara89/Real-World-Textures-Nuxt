<template>
  <div class="signup">
    <div class="signup__wrap">
      <div class="container container--small">
        <!-- <h1 class="signup__title">{{ title }}</h1> -->
        <div class="signup__btn-wrap">
          <div class="button-quaternary button-quaternary--blue">
            sign up by
            <b>facebook</b>
          </div>
          <div class="button-quaternary button-quaternary--salmon">
            sing up by
            <b>google</b>
          </div>
        </div>
        <div class="signup__divider">
          <span>or</span>
        </div>
        <form class="signup__form">
          <div :class="['signup__input', isFilled(input.firstName)]">
            <input type="text" v-model="input.firstName" />
            <label for>{{label.txtFirstName}}</label>
          </div>
          <div :class="['signup__input', isFilled(input.mail), isEmailValid(input.mail)]">
            <input type="text" v-model="input.mail" />
            <label for>{{label.txtEmail}}</label>
          </div>
          <div :class="['signup__input', isFilled(input.password), isEmailValid(input.password)]">
            <input type="password" v-model="input.password" />
            <label for>{{label.txtPassword}}</label>
          </div>
          <div class="signup__recaptcha">
            <vue-recaptcha
              :loadRecaptchaScript="true"
              sitekey="6LfzhK4ZAAAAADYraaQUsspKmiLcIstMvTfTclYK"
            ></vue-recaptcha>
          </div>
          <label class="signup__checkbox" :class="{'signup__checkbox--checked': agree}">
            <input type="checkbox" v-model="agree" />Creating an account means you’re okay with our
            <nuxt-link to="/">Terms of Service</nuxt-link>and our
            <nuxt-link to="/">Privacy Policy.</nuxt-link>
          </label>
          <div class="signup__submit">
            <button
              class="button-primary button-primary--large"
              type="submit"
              @click="submit"
            >Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "SignUp",
  components: {
    Button,
    VueRecaptcha
  },
  data() {
    return {
      title: "Account Regsiter",
      label: {
        txtFirstName: "First Name",
        txtEmail: "E-mail Address",
        txtPassword: "Password"
      },
      input: {
        firstName: "",
        mail: "",
        password: ""
      },
      agree: false,
      emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  computed: {

  },
  methods: {
    submit: function(e) {
      e.preventDefault();
    },
    isFilled(value){
      return (value == '') ? "" : "signup__input--filled";
    },
    isEmailValid(value){
       return (this.emailReg.test(value)) ? '' : 'input-invalid';
    },
    isPasswordValid(value){
      return (value.length > 8) ? '' : 'input-invalid';
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/signup.scss";
</style>
