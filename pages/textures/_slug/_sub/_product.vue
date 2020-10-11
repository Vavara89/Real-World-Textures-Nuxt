<template>
  <div>
    <TextureDetail @closed="$emit('closed')" v-if="product" :type_title="'Texture'" :type_code="'textures'" :texture="product"></TextureDetail>
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
  },
}
</script>
