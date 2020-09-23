<template>
  <div>

    <div class="modal">
      <div class="inner">
        <h2>Reset your password</h2>
        <form @submit="recovery" method="post" class="email">
          <label class="email">Your email address</label>
          <input
            class="email"
            :class="{'email--error': errors.length && !added}"
            type="text"
            placeholder="Your email address"
            id="email"
            v-model="email"
            @input="inputEmail"
            @blur="inputEmail"
            name="email"
          />
          <div class="errors" :class="{'success': !this.errors}">
            <span v-if="errors.length">{{ errors[0] }}</span>
          </div>
          <button :class="[isSubmitted ? 'loading' : '']" type="submit" class="email auto">confirm</button>
          <div class="clear" />
        </form>
        <span class="isrelative"><nuxt-link class="style green" :to="'/login'">Back to login</nuxt-link> or
        <nuxt-link class="style" :to="'/recovery-finish'">Do you have token already?</nuxt-link></span>

      </div>
    </div>
    <div class="silkscreen"></div>
  </div>
</template>

<script>
import users from "@/collectors/users";

export default {
  name: "Recovery",
  components: {},
  data: () => ({
    errors: [],
    email: '',
    added: false,
    isSubmitted: false,
  }),
  methods: {
    async recovery(e) {
      e.preventDefault();
      this.isSubmitted = true;
      this.errors = [];
      if (!this.validEmail(this.email)) {
        this.errors.push('Email is invalid');
      }
      if (!this.errors.length) {
        await users.recovery(this.email).catch(errors => {
          if (errors.response.status === 400) {
            this.errors = errors.response.data;
          }
        }).finally(()=>{
          this.isSubmitted = false;
        });
        if (!this.errors.length){
          await this.redirect();
        }
      }
    },
    async redirect(){
      return this.$nuxt.$router.replace({ path: `/recovery-finish`});
    },

    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    inputEmail(){
      this.added = !this.email.length;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
