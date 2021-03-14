<template>
  <div class="signup">
    <div class="signup__wrap">
      <div class="container container--small">
        <!-- <h1 class="signup__title">{{ title }}</h1> -->
        <div class="signup__btn-wrap">
          <div class="button-quaternary button-quaternary--blue" @click="facebook">
            sign up by
            <b>facebook</b>
          </div>
          <div class="button-quaternary button-quaternary--salmon" @click="google">
            sing up by
            <b>google</b>
          </div>
        </div>
        <div class="signup__divider">
          <span>or</span>
        </div>
        <form class="signup__form">
          <div :class="['signup__input', isFilled(input.firstName), hasErrors('firstName') || isFilled(input.firstName) ? 'input-invalid' : '']">
            <input v-model="input.firstName" type="text" @blur="validateFirstName">
            <label for>{{ label.txtFirstName }}</label>
            <form-input-errors v-if="hasErrors('firstName')" :errors="getErrors('firstName')" />
          </div>
          <div :class="['signup__input', isFilled(input.email), hasErrors('email') || isFilled(input.email)? 'input-invalid' : '']">
            <input v-model="input.email" type="text">
            <label for>{{ label.txtEmail }}</label>
            <form-input-errors v-if="hasErrors('email')" :errors="getErrors('email')" />
          </div>
          <div :class="['signup__input', isFilled(input.password), hasErrors('password') || isFilled(input.password) ? 'input-invalid' : '']">
            <input v-model="input.password" type="password">
            <label for>{{ label.txtPassword }}</label>
            <form-input-errors v-if="hasErrors('password')" :errors="getErrors('password')" />
          </div>
          <div :class="'signup__input'">
            <select v-model="input.proffesional" class="default">
              <option selected="selected">
                What is your work profile?
              </option>
              <option v-for="label in types" :value="label">
                {{ label }}
              </option>
            </select>
          </div>
          <div>
            <label class="signup__checkbox h4-lowercase newsletters-check" :class="{'signup__checkbox--checked': input.newsletters}">
              <input v-model="input.newsletters" type="checkbox">I do not want to receive any newsletters and promotional offers.
            </label>
          </div>
          <label class="signup__checkbox h4-lowercase" :class="{'signup__checkbox--checked': input.agree}">
            <input v-model="input.agree" type="checkbox" @change="validateAgree">Creating an account means you’re okay
            with our
            <nuxt-link to="/content/terms-and-conditions">Terms of Service</nuxt-link>
            and our
            <nuxt-link to="/content/privacy-policy">Privacy Policy.</nuxt-link>
          </label>
          <div :class="['signup__input', isFilled(input.agree), hasErrors('agree') ? 'input-agree' : '']">
            <form-input-errors v-if="hasErrors('agree')" :errors="getErrors('agree')" />
          </div>
          <div class="signup__recaptcha">
            <vue-recaptcha
              ref="recaptcha"
              :load-recaptcha-script="true"
              sitekey="6Le9u-8ZAAAAAKFsoiakKmu8zRx8H_T3DCW-xzPR"
              @expired="onCaptchaExpired"
              @verify="setCaptchaToken"
            />
            <form-input-errors v-if="hasErrors('recaptcha')" :errors="getErrors('recaptcha')" />
          </div>
          <div class="signup__submit">
            <button
              class="button-primary button-primary--large"
              :class="[isSubmitted ? 'loading' : '']"
              type="submit"
              @click="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import email from 'vuelidate';
import Button from '@/components/Button';
import users from '~/collectors/users';
import FormInputErrors from '@/components/Forms/FormInputErrors';
import keysToCamel from '@/classes/keysToCamel.ts';
import Dropdown from '@/components/Sidebar/Dropdown';

export default {
  name: 'SignUp',
  components: {
    Button,
    VueRecaptcha,
    FormInputErrors,
    Dropdown
  },
  data () {
    return {
      title: 'Account Regsiter',
      label: {
        txtFirstName: 'Name',
        txtEmail: 'E-mail Address',
        txtPassword: 'Password'
      },
      input: {
        firstName: '',
        email: '',
        password: '',
        proffesional: 'What is your work profile?',
        newsletters: true,
        agree: false,
        recaptcha: false
      },
      isSubmitted: false,
      formErrors: {
        firstName: [],
        email: [],
        password: [],
        agree: [],
        recaptcha: []
      },
      types: [
        'Architecture: private firm',
        'Architecture: sole practitioner/freelancer',
        'Architecture: construction/real estate',
        'Architecture: academic',
        'Architecture: student',
        'Provider of architectural products/construction materials',
        'Landscape',
        'Urbanism',
        'Interior design',
        'Design',
        '3D artist',
        'Game developer',
        'Film industry',
        'Fashion',
        'Transportation',
        'Engineering',
        'Real estate',
        'Media/PR agency',
        'Other'
      ],
      errorsMessages: {
        firstName: {
          invalid: 'This field is required'
        },
        password: {
          invalid: 'The password must be at least 7 characters long and have at least 1 uppercase letter, 1 lowercase letter, and 1 number'
        },
        email: {
          invalid: 'Email is invalid'
        },
        agree: {
          invalid: 'You should accept this'
        },
        recaptcha: {
          invalid: 'You should verify captcha'
        }
      }
    };
  },
  computed: {
    profile_types () {
      return this.types.map((item) => {
        return { value: item };
      });
    }
  },
  methods: {
    submit (e) {
      e.preventDefault();
      this.cleanErrors();
      if (this.frontendValidation()) {
        this.isSubmitted = true;
        this.register();
      }
    },
    setCaptchaToken (token) {
      this.input.recaptcha = token;
      this.cleanError('recaptcha');
    },
    frontendValidation () {
      const validEmail = this.isEmailValid(this.input.mail);
      if (!validEmail) {
        this.addFormValidationError('email', this.errorsMessages.email.invalid);
      }
      const validPassword = this.isPasswordValid(this.input.password);

      if (!validPassword) {
        this.addFormValidationError('password', this.errorsMessages.password.invalid);
      }
      this.validateAgree();
      this.validateFirstName();

      if (!this.input.recaptcha) {
        this.addFormValidationError('recaptcha', this.errorsMessages.recaptcha.invalid);
      }
      return this.formIsValid();
    },
    validateAgree () {
      if (!this.input.agree) {
        this.addFormValidationError('agree', this.errorsMessages.agree.invalid);
      } else {
        this.cleanError('agree');
      }
    },
    validateFirstName () {
      if (!this.input.firstName.length) {
        this.addFormValidationError('firstName', this.errorsMessages.firstName.invalid);
      } else {
        this.cleanError('firstName');
      }
    },
    isFilled (value) {
      return (value === '') ? '' : 'signup__input--filled';
    },

    isEmailValid () {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.input.email);
    },
    isPasswordValid () {
      console.log(this.input.password);
      return this.input.password.length >= 7 && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/.test(this.input.password));
    },
    addFormValidationError (input, message) {
      this.formErrors[input].push(message);
    },
    hasErrors (input) {
      return this.getErrors(input).length > 0;
    },
    formIsValid () {
      let hasErrors = false;
      Object.keys(this.formErrors).map((key) => {
        if (this.formErrors[key].length > 0) {
          hasErrors = true;
        }
      });
      return !hasErrors;
    },
    getErrors (input) {
      return this.formErrors[input].length ? this.formErrors[input] : [];
    },
    cleanErrors () {
      Object.keys(this.formErrors).map(key => this.cleanError(key));
    },
    cleanError (input) {
      this.formErrors[input] = [];
    },

    async register () {
      await users.register({
        email: this.input.email,
        password: this.input.password,
        recaptcha: this.input.recaptcha,
        proffesional: this.input.proffesional,
        newsletters: !this.input.newsletters,
        first_name: this.input.firstName
      }).catch((errors) => {
        if (errors.response) {
          const dataErrors = keysToCamel(errors.response.data);
          Object.keys(dataErrors).map((key) => { this.formErrors[key] = dataErrors[key]; });
        }
      }).finally(() => {
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
    onCaptchaExpired () {
      this.$refs.recaptcha.reset();
      this.input.recaptcha = null;
    },
    async login () {
      if (this.formIsValid()) {
        await this.$auth.loginWith('local', {
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
