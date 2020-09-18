<template>
  <div :class="{'success': success}" class="success-holder">
    <div class="success-info">
      <div class="success-icon"></div>
      <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'success',
  props:{
    title:{
      type: String,
      default: 'Data successfully saved'
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      saved:false,
    };
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/_success.scss";
</style>
