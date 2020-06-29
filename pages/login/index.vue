<template>
  <div class="login">
    <div class="container container--content">
      <h1 class="login__title">{{ title }}</h1>
      <div class="login__btn-wrap">
        <div class="button-quaternary button-quaternary--blue">
          sign up by
          <b>facebook</b>
        </div>
        <div class="button-quaternary button-quaternary--salmon">
          sing up by
          <b>google</b>
        </div>
      </div>
      <div class="login__divider">
        <span>or</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Account Login",
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/login.scss";
</style>
