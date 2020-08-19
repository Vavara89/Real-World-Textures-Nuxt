<template>
  <div class="content-header">
    <Filters :assets="assets" />
    <SortOption />
  </div>
</template>
<script>
import SortOption from '@/components/Textures/SortOption';
import Filters from '@/components/Textures/Filters';

export default {
  name: 'ContentHeader',
  components: {
    SortOption,
    Filters
  },
  props: {
    assets: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/components/_contentHeader.scss";
</style>
