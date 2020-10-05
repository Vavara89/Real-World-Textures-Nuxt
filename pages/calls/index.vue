<template>
  <div class="calls">
    <LoginModals text="Taken" modal="taken" />
    <LoginModals text="Captcha" modal="captcha" />
    <LoginModals text="Bookmarked" modal="bookmarked" />
    <LoginModals text="Wrong" modal="wrong" />
    <LoginModals text="Reset" modal="reset" />
    <LoginModals text="Unsubscribe" modal="unsubscribe" />

    <LoginModals text="Payment" modal="payment" />
    <LoginModals text="Address" modal="address" />
  </div>
</template>

<script>
import LoginModals from '@/components/LoginModals/LoginModals';

export default {
  name: 'Calls',
  components: {
    LoginModals
  },
  props: {
  },
  data () {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/calls.scss";
</style>
