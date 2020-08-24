<template>
  <div class="calls">
    <LoginModals text="Taken" modal="taken" />
    <LoginModals text="Captcha" modal="captcha" />
    <LoginModals text="Bookmarked" modal="bookmarked" />
    <LoginModals text="Wrong" modal="wrong" />

    <LoginModals text="Reset" modal="reset" />
  </div>
</template>

<script>
import LoginModals from "@/components/LoginModals/LoginModals";

export default {
  name: "Calls",
  components: {
    LoginModals,
  },
  data() {
    return {
    }
  },
  props: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/calls.scss";
</style>
