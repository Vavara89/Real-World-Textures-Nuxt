<template>
  <div v-if="showErrorsMessage" class="calls">
    <div class="modal">
      <div class="inner">
        <span @click="close" class="close"></span>
        <img src="@/assets/img/icon-wrong.svg" alt />
        <h2>Something went wrong</h2>
        <p class="style">omg we're sorry. please, check it later.</p>
        <a href="#" class="style green">or get help</a>
      </div>
    </div>
    <div class="silkscreen"></div>
  </div>


</template>

<script>
export default {
  name: "ServerError",
  components: {},
  props: {
    message: '',
    status: '',
    showErrorsMessage: false,
  },
  methods: {
    close(){
      this.showErrorsMessage = false;
    },
    scrollSwitcher(state) {
      if (state) {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
  },
  created() {
    if (this.show){
      document.body.style.overflowY = "hidden";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_loginmodals.scss";
</style>
