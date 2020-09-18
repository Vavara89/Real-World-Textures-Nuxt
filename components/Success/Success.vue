<template>
  <div :class="{'success': success}" class="success-holder">
    <div class="success-info">
      <h3>Data success saved</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'success',
  props:{
    title:{
      type: String,
      default: 'Data success saved'
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
