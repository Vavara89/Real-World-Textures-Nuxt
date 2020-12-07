<template>
  <div class="wrapper">
    <server-error
      v-if="showErrorsMessage"
      @close="closeError"
      :status="serverMessageStatus"
      :message="serverMessageError"
    />
    <HeaderCatalog/>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer";
import ServerError from "@/components/ServerError/ServerError";
import HeaderCatalog from '~/components/Header/HeaderCatalog.vue';


export default {
  components: {
    HeaderCatalog,
    Footer,
    ServerError
  },
  data: () => {
    return {
      showErrorsMessage: false,
      serverMessageError: "",
      serverMessageStatus: "",
    };
  },
  created() {
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
