<template>
  <div class="wrapper">
    <server-error :status="serverMessageStatus" :message="serverMessageError" :showErrorsMessage="showErrorsMessage"/>
    <Header/>
    <nuxt/>
    <Footer v-if="$route.name !== 'login' && $route.name !== 'signup'"/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ServerError from "@/components/ServerError/ServerError"
import main from "@/collectors/main";

export default {
  components: {
    Header,
    Footer,
    ServerError
  },
  data: ()=>{
    return {
      showErrorsMessage: false,
      serverMessageError: '',
      serverMessageStatus: '',
    };
  },
  created () {

    this.$nuxt.$on('server-error', (data) => {
      if(data.response){
        this.serverMessageError = data.response.data ? data.response.data : '';
        this.serverMessageStatus = data.response.status ? data.response.status : '';
        this.showErrorsMessage = true;
      }
    })
  },

};
</script>
