<template>
  <div >
      <ul class="calls">
        <li><a href="#">First</a></li>
        <li><a href="#">Captcha failed</a></li>
        <li><a href="#">Bookmarked</a></li>
        <li><a href="#">Something wrong</a></li>
        <li><a href="#">Reset password</a></li>
    </ul>
    <LoginModals />
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
  computed: {
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/calls.scss";
</style>
