<template>
  <div class="wrapper">
    <server-error
      v-if="showErrorsMessage"
      :status="serverMessageStatus"
      :message="serverMessageError"
      @close="closeError"
    />
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ServerError from '@/components/ServerError/ServerError';
import main from '@/collectors/main';

export default {
  components: {
    Header,
    Footer,
    ServerError
  },
  data: () => {
    return {
      showErrorsMessage: false,
      serverMessageError: '',
      serverMessageStatus: ''
    };
  },
  created () {
    console.log(this.$route.name);
    this.$nuxt.$on('server-error', (data) => {
      if (data.response) {
        this.serverMessageError = data.response.data ? data.response.data : '';
        this.serverMessageStatus = data.response.status
          ? data.response.status
          : '';
        this.showErrorsMessage = true;
      }
    });
  },
  methods: {
    closeError () {
      this.showErrorsMessage = false;
      document.body.style.overflowY = 'auto';
    }
  },
  head: {
    bodyAttrs: {
      ontouchstart: 'ontouchstart'
    }
  }
};
</script>
