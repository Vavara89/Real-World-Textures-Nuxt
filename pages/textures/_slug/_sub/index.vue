<template>
  <div>
    <TextureDetail v-if="product" :type_title="'Texture'" :type_code="'textures'" :texture="product"></TextureDetail>
  </div>
</template>
<script>
import TextureDetail from "@/components/TextureDetail/TextureDetail";

export default {
  components:{
    TextureDetail
  },
  props:{
    product: {
      type: Object,
      required: false
    },
  },
  validate({params}) {
    return true;
  }
}
</script>
