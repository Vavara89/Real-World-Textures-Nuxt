<template>
  <div>
    <TextureDetail v-if="product" :type_title="'Texture'" :type_code="'hdr'" :texture="product"></TextureDetail>
  </div>
</template>
<script>
import TextureDetail from "@/components/TextureDetail/TextureDetail";

export default {
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
