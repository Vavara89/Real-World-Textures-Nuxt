<template>
  <div class="wrapper">
    <server-error
      v-if="showErrorsMessage"
      @close="closeError"
      :status="serverMessageStatus"
      :message="serverMessageError"
    />
    <Header v-if="$route.name !== 'signup'" />
    <HeaderSignup v-if="$route.name === 'signup'" />
    <HeaderTextures v-if="$route.name === 'textures'" />
    <nuxt />
    <Footer v-if="$route.name !== 'login' && $route.name !== 'signup'" />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import HeaderSignup from "@/components/Header/HeaderSignup";
import Footer from "@/components/Footer/Footer";
import ServerError from "@/components/ServerError/ServerError";
import main from "@/collectors/main";

export default {
  components: {
    Header,
    Footer,
    ServerError,
    HeaderSignup,
  },
  data: () => {
    return {
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
