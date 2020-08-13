<template>
  <div class="signup">
    <div class="signup__wrap">
      <div class="container container--small">
        <!-- <h1 class="signup__title">{{ title }}</h1> -->
        <div class="signup__btn-wrap">
          <div @click="facebook" class="button-quaternary button-quaternary--blue">
            sign up by
            <b>facebook</b>
          </div>
          <div @click="google" class="button-quaternary button-quaternary--salmon">
            sing up by
            <b>google</b>
          </div>
        </div>
        <div class="signup__divider">
          <span>or</span>
        </div>
        <form class="signup__form">
          <div :class="['signup__input', isFilled(input.firstName), hasErrors('firstName') ? 'input-invalid' : '']">
            <input @blur="validateFirstName" type="text" v-model="input.firstName"/>
            <label for>{{ label.txtFirstName }}</label>
            <form-input-errors v-if="hasErrors('firstName')" :errors="getErrors('firstName')"/>
          </div>
          <div :class="['signup__input', isFilled(input.email), hasErrors('email') ? 'input-invalid' : '']">
            <input type="text" v-model="input.email"/>
            <label for>{{ label.txtEmail }}</label>
            <form-input-errors v-if="hasErrors('email')" :errors="getErrors('email')"/>

          </div>
          <div :class="['signup__input', isFilled(input.password), hasErrors('password') ? 'input-invalid' : '']">
            <input type="password" v-model="input.password"/>
            <label for>{{ label.txtPassword }}</label>
            <form-input-errors v-if="hasErrors('password')" :errors="getErrors('password')"/>
          </div>
          <div class="signup__recaptcha">
            <vue-recaptcha
              ref="recaptcha"
              :loadRecaptchaScript="true"
              sitekey="6LfzhK4ZAAAAADYraaQUsspKmiLcIstMvTfTclYK"
              @expired="onCaptchaExpired"
              @verify="setCaptchaToken"
            ></vue-recaptcha>
            <form-input-errors v-if="hasErrors('recaptcha')" :errors="getErrors('recaptcha')"/>
          </div>
          <label class="signup__checkbox h4-lowercase" :class="{'signup__checkbox--checked': input.agree}">
            <input @change="validateAgree" type="checkbox" v-model="input.agree"/>Creating an account means you’re okay
            with our
            <nuxt-link to="/">Terms of Service</nuxt-link>
            and our
            <nuxt-link to="/">Privacy Policy.</nuxt-link>
          </label>
          <form-input-errors v-if="hasErrors('agree')" :errors="getErrors('agree')"/>
          <div class="signup__submit">
            <button
              class="button-primary button-primary--large"
              :class="[isSubmitted ? 'loading' : '']"
              type="submit"
              @click="submit"
            >Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import VueRecaptcha from "vue-recaptcha";
import email from "vuelidate";
import users from "~/collectors/users";
import FormInputErrors from '@/components/Forms/FormInputErrors'
import keysToCamel from "@/classes/keysToCamel.ts";


export default {
  name: "SignUp",
  components: {
    Button,
    VueRecaptcha,
    FormInputErrors
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
        firstName: '',
        email: '',
        password: '',
        agree: false,
        recaptcha: false,
      },
      isSubmitted: false,
      formErrors: {
        firstName:[],
        email: [],
        password: [],
        agree: [],
        recaptcha: [],
      },
      errorsMessages: {
        firstName: {
          invalid: 'This field is required'
        },
        password: {
          invalid: 'Password is as least 7 characters long and has at least 1 digit and 1 letter'
        },
        email: {
          invalid: 'Email is invalid'
        },
        agree: {
          invalid: 'You should accept this'
        },
        recaptcha: {
          invalid: 'You should verify captcha'
        },
      },
    };
  },
  computed: {},
  methods: {
    submit: function (e) {
      e.preventDefault();
      this.cleanErrors();
      if (this.frontendValidation()) {
        this.isSubmitted = true;
        this.register();
      }
    },
    setCaptchaToken(token) {
      this.input.recaptcha = token;
      this.cleanError('recaptcha');
    },
    frontendValidation() {
      const validEmail = this.isEmailValid(this.input.mail);
      if (!validEmail) {
        this.addFormValidationError('email', this.errorsMessages.email.invalid)
      }
      const validPassword = this.isPasswordValid(this.input.password);

      if (!validPassword) {
        this.addFormValidationError('password', this.errorsMessages.password.invalid)
      }
      this.validateAgree();
      this.validateFirstName();

      if (!this.input.recaptcha) {
        this.addFormValidationError('recaptcha', this.errorsMessages.recaptcha.invalid)
      }
      return this.formIsValid();
    },
    validateAgree() {
      if (!this.input.agree) {
        this.addFormValidationError('agree', this.errorsMessages.agree.invalid)
      } else {
        this.cleanError('agree');
      }
    },
    validateFirstName() {
      if(!this.input.firstName.length){
        this.addFormValidationError('firstName', this.errorsMessages.firstName.invalid)
      }else{
        this.cleanError('firstName');
      }
    },
    isFilled(value) {
      return (value === '') ? "" : "signup__input--filled";
    },

    isEmailValid() {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.email);
    },
    isPasswordValid() {
      return this.input.password.length >= 7 && (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*)$/.test(this.input.password));
    },
    addFormValidationError(input, message) {
      this.formErrors[input].push(message);
    },
    hasErrors(input) {
      return this.getErrors(input).length > 0;
    },
    formIsValid() {
      let hasErrors = false;
      Object.keys(this.formErrors).map((key) => {
        if (this.formErrors[key].length > 0) {
          hasErrors = true;
        }
      });
      return !hasErrors;
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

    async register() {

      await users.register({
        email: this.input.email,
        password: this.input.password,
        recaptcha: this.input.recaptcha,
        first_name: this.input.firstName,
      }).catch(((errors) => {
        if(errors.response){
          const dataErrors = keysToCamel(errors.response.data);
          Object.keys(dataErrors).map((key)=>{this.formErrors[key] = dataErrors[key]});
        }
      })).finally(()=>{
        this.isSubmitted = false;
      });
      await this.login();

    },
    facebook () {
      this.$auth.loginWith('facebook');
    },
    google () {
      this.$auth.loginWith('google');
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
      this.input.recaptcha = null;
    },
    async login(){
      if (this.formIsValid()){
        await  this.$auth.loginWith('local', {
          data: {
            email: this.input.email,
            password: this.input.password
          }
        });
      }

    }

  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/signup.scss";
</style>
