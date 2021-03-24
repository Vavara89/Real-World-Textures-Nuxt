<template>
  <div>
    <HdrDetail v-if="product" :type_title="'Texture'" :type_code="'hdr'" :texture="product"></HdrDetail>
  </div>
</template>
<script>
import HdrDetail from "@/components/TextureDetail/HdrDetail";

export default {
  components: {
    HdrDetail,
  },
  props: {
    product: false
  },
  validate({params}) {
    return  true;
  }
}
</script>
