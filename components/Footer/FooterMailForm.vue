<template>
  <form @submit="subscribe" action class="footer-mailform">
    <input v-model="email" type="text" class="footer-mailform__input" placeholder="Enter your e-mail"/>
    <input
      type="submit"
      class="footer-mailform__button button-primary button-primary--inverted"
      value="Join now!"
    />
    <div v-if="error" class="error">{{error}}</div>
    <div v-if="success" class="error">{{success}}</div>
  </form>
</template>

<script>
import main from '@/collectors/main';

export default {
  name: 'FooterMailForm',
  data () {
    return {
      email: '',
      error: false,
      success: false
    };
  },
  computed: {
    user() {
      return this.$auth.user.user;
    },
  },
  methods:{
    subscribe(e){
      this.error = false;
      this.success = false;
      e.preventDefault();
      main.subscribe(this.email).then(data => {
        this.success = 'You are success subscribed';
      }).catch(data => {
          this.error = data.response.data.email[0];
      });
      return false;
    }
  }

};
</script>
