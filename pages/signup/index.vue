<template>
<sign-up></sign-up>
</template>

<script>
import SignUp from '~/components/SignUp.vue';


export default {
  layout: "singup",
  auth: "guest",
  data() {
    return {
      bannerTxt1: "Get started for FREE",
      bannerTxt2:
        "Then you can stay that way or choose from 2 simple subscription plan",
      input: {
        firstName: "",
        mail: "",
        password: "",
      },
      agree: false,
    };
  },
  components: {
    SignUp
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/signup-container.scss";
</style>
