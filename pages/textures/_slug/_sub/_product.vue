<template>
  <div>
    <TextureDetail v-if="product" :texture="product"></TextureDetail>
  </div>
</template>
<script>
import TextureDetail from "@/components/TextureDetail/TextureDetail";

export default {
  name: 'Textures',
  components: {
    TextureDetail,
  },
  props: {
    product: false
  },
  validate({params}) {
    return  true;
  }
}
</script>
