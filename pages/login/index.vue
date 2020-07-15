<template>
  <div class="login">
    <div class="login__wrap">
      <div class="container container--small">
        <h1 class="login__title">{{ title }}</h1>
        <div class="login__btn-wrap">
          <div class="button-quaternary button-quaternary--blue">
            sign up by
            <b>facebook</b>
          </div>
          <div class="button-quaternary button-quaternary--salmon">
            sing up by
            <b>google</b>
          </div>
        </div>
        <div class="login__divider">
          <span>or</span>
        </div>
        <form class="login__form">
          <div class="login__input" :class="{'login__input--filled': checkInputMail}">
            <input type="text" v-model="input.mail">
            <label for="">Email address</label>
          </div>
          <div class="login__input" :class="{'login__input--filled': checkInputPassword}">
            <input type="password" v-model="input.password">
            <label for="">Password</label>
          </div>
          <div class="login__link">
            <nuxt-link to="/">forgotten password?</nuxt-link>
          </div>
          <label class="login__checkbox" :class="{'login__checkbox--checked': rememberPassword}">
            <input type="checkbox" v-model="rememberPassword">Remember me
          </label>
          <div class="login__submit">
            <button class="button-primary button-primary--large" type="submit">
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

export default {
  components: {
    Button,
  },
  data() {
    return {
      title: "Account Login",
      input: {
        mail: "",
        password: "",
      },
      rememberPassword: false,
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/login.scss";
</style>
