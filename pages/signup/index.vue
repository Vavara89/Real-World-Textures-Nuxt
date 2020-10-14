<template>
  <div class="signup-container">
    <div class="signup-container__left">
      <h1 class="signup__bannertxt1">{{ bannerTxt1 }}</h1>
      <h3 class="signup__bannertxt2">{{ bannerTxt2 }}</h3>
    </div>
    <div class="signup-container__right">
      <SignUp></SignUp>
    </div>
  </div>
</template>

<script>
import SignUp from "@/pages/signup/SignUp";

export default {
  auth: 'guest',
  data() {
    return {
      bannerTxt1: "Get started for FREE",
      bannerTxt2: "Then you can stay that way or choose from 2 simple subscription plan",
      input: {
        firstName: "",
        mail: "",
        password: ""
      },
      agree: false
    };
  },
  components: {
    SignUp
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/signup-container.scss";
</style>
