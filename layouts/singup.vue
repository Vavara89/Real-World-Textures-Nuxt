<template>
  <div class="wrapper">
    <server-error
      v-if="showErrorsMessage"
      @close="closeError"
      :status="serverMessageStatus"
      :message="serverMessageError"
    />
    <HeaderSignup />
    <div class="signup-container">
      <div class="signup-container__left">
        <h1 class="signup__bannertxt1">{{ bannerTxt1 }}</h1>
        <h3 class="signup__bannertxt2">{{ bannerTxt2 }}</h3>
      </div>
      <div class="signup-container__right">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSignup from "@/components/Header/HeaderSignup";
import Footer from "@/components/Footer/Footer";
import ServerError from "@/components/ServerError/ServerError";
import main from "@/collectors/main";

export default {
  components: {
    Footer,
    ServerError,
    HeaderSignup,
  },
  data: () => {
    return {
      bannerTxt1: "Get started for FREE",
      bannerTxt2:
        "Then you can stay that way or choose from 2 simple subscription plan",
      showErrorsMessage: false,
      serverMessageError: "",
      serverMessageStatus: "",
    };
  },
  created() {
    console.log(this.$route.name);
    this.$nuxt.$on("server-error", (data) => {
      if (data.response) {
        this.serverMessageError = data.response.data ? data.response.data : "";
        this.serverMessageStatus = data.response.status
          ? data.response.status
          : "";
        this.showErrorsMessage = true;
      }
    });
  },
  methods: {
    closeError() {
      this.showErrorsMessage = false;
      document.body.style.overflowY = "auto";
    },
  },
  head: {
    bodyAttrs: {
      ontouchstart: "ontouchstart",
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/pages/signup-container.scss";
</style>
