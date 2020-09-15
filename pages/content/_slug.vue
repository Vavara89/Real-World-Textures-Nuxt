<template>
  <div class="login">
    <div class="login__wrap">
      <div class="container container--small">
        <h1 class="login__title">{{ page.name }}</h1>
        <div class="content">
          <div class="wysiwyg wysiwyg--medium" v-html="page.content"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import FormInputErrors from '@/components/Forms/FormInputErrors'
import keysToCamel from "@/classes/keysToCamel.ts";
import main from "@/collectors/main";

export default {
  components: {
  },
  async asyncData(ctx){
    let page = {};

    await main.page(ctx.route.params['slug']).then((response)=>{
      page = response.data;
    });
    return {
      page: page
    }
  },
  data() {
    return {
      page:{},
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/login.scss";
</style>
