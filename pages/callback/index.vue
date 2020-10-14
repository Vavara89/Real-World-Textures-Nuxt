<template>
  <div class="loader-holder" style="min-height: 400px;">
    <i class="loader"></i>
  </div>
</template>
<script>


export default {
  name: 'Callback',

  created () {
    setTimeout(()=>{
      this.$router.replace('/profile');
    }, 5000);
  },
};
</script>
