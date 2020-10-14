<template>
  <div>
  </div>
</template>
<script>
import TextureDetail from '@/components/TextureDetail/TextureDetail';

export default {
  name: 'Textures',
  components: {
    TextureDetail,
  },
  props: {
    product: false
  },
  validate ({ params }) {
    return true;
  },
};
</script>
