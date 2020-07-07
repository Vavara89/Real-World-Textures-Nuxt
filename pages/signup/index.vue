<template>
  <div class="signup">
    <div class="signup__wrap">
      <div class="container container--small">
        <h1 class="signup__title">{{ title }}</h1>
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
          <div class="signup__input" :class="{'signup__input--filled': checkInputFirstName}">
            <input type="text" v-model="input.firstName">
            <label for="">First Name</label>
          </div>
          <div class="signup__input" :class="{'signup__input--filled': checkInputMail}">
            <input type="text" v-model="input.mail">
            <label for="">E-mail Address</label>
          </div>
          <div class="signup__input" :class="{'signup__input--filled': checkInputPassword}">
            <input type="password" v-model="input.password">
            <label for="">Password</label>
          </div>
          <div class="signup__recaptcha">
            <vue-recaptcha :loadRecaptchaScript="true" sitekey="6LfzhK4ZAAAAADYraaQUsspKmiLcIstMvTfTclYK">
            </vue-recaptcha>
            </div>
          <label class="signup__checkbox" :class="{'signup__checkbox--checked': agree}">
            <input type="checkbox" v-model="agree">Creating an account means you’re okay with our <nuxt-link to="/" >Terms of Service</nuxt-link> and our <nuxt-link to="/">Privacy Policy.</nuxt-link>
          </label>
          <div class="signup__submit">
            <button class="button-primary button-primary--large" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: {
    Button,
    VueRecaptcha,
  },
  data() {
    return {
      title: "Account Regsiter",
      input: {
        firstName: "",
        mail: "",
        password: "",
      },
      agree: false,
    };
  },
  computed: {
    checkInputMail() {
      if (this.input.mail.length > 0) {
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
    checkInputFirstName() {
      if (this.input.password.length > 0) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/signup.scss";
</style>
