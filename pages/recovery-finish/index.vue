<template>
  <div>
    <div v-if="success" class="modal">
      <div class="inner">
        <img src="@/assets/img/icon-bookmarked.svg" alt>
        <h2>Password was changed successfully</h2>
        <p class="style">
          You can login with new password
        </p>
        <nuxt-link class="style green" :to="'/login'">
          Go to login
        </nuxt-link>
      </div>
    </div>

    <div v-if="!success" class="modal rec" :class="{'inner-helper': hasErrors('token') && isFilled('token')}">
      <div class="inner">
        <h2>Change your password</h2>
        <p>We were send you token on email, please check it</p>
        <form method="post" class="email" autocomplete="off" @submit="recovery">
          <div style="position: relative;" :class="{'height': hasErrors('token') && isFilled('token')}">
            <label class="token">Token from email</label>
            <input
              id="token"
              v-model="input.token"
              class="email"
              :class="{'email--error': hasErrors('token') && isFilled('token')}"
              type="text"
              placeholder="Token number"
              name="email recover"
            >
            <form-input-errors v-if="hasErrors('token')" :errors="getErrors('token')" />
          </div>

          <div style="position: relative;" :class="{'height': hasErrors('token') && isFilled('token')}">
            <label class="token">Password</label>
            <input
              id="password"
              v-model="input.password"
              class="email recover"
              :class="{'email--error': hasErrors('password') && isFilled('password')}"
              type="password"
              placeholder="New password"
              name="password"
            >
            <form-input-errors v-if="hasErrors('password')" :errors="getErrors('password')" />
          </div>

          <button :disabled="isSubmitted" :class="[isSubmitted ? 'loading' : '', {'button-helper': hasErrors('token') && isFilled('token')}]" type="submit" class="email autos">
            confirm
          </button>
        </form>
        <nuxt-link class="style green" :to="'/login'">
          Back to login
        </nuxt-link>
        or
        <nuxt-link class="style" :to="'/recovery'">
          Send token again
        </nuxt-link>
      </div>
    </div>
    <div class="silkscreen" />
  </div>
</template>

<script>
import users from '@/collectors/users';
import FormInputErrors from '@/components/Forms/FormInputErrors';
import keysToCamel from '@/classes/keysToCamel.ts';

export default {
  name: 'RecoveryFinish',
  components: {
    FormInputErrors
  },
  data: () => ({
    input: {
      token: '',
      password: ''
    },
    isSubmitted: false,
    formErrors: {
      token: [],
      password: []
    },
    added: false,
    success: false
  }),
  methods: {
    async recovery (e) {
      e.preventDefault();
      this.isSubmitted = true;
      this.cleanErrors();
      if (!this.isPasswordValid()) {
        this.addFormValidationError('password', 'The password must be at least 7 characters long and have at least 1 uppercase letter, 1 lowercase letter, and 1 number');
      }
      if (!this.input.token.length) {
        this.addFormValidationError('token', 'Token should be filled');
      }
      if (this.formIsValid()) {
        users.recoveryFinish(this.input.token, this.input.password).catch((error) => {
          if (error.response.status === 400) {
            const dataErrors = keysToCamel(error.response.data);
            Object.keys(dataErrors).map((key) => { this.formErrors[key] = dataErrors[key]; });
          }
          if (error.response.status === 404) {
            this.addFormValidationError('token', 'Token not found or invalid');
          }
        }).finally((data) => {
          this.isSubmitted = false;
        }).then((data) => {
          this.success = data.status === 200;
        });
      } else {
        this.isSubmitted = false;
      }
    },
    isPasswordValid () {
      return this.input.password.length >= 7 && (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*)$/.test(this.input.password));
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

    isFilled (value) {
      return (value === '') ? '' : 'email--error';
    }

  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
