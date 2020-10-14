<template>
  <div>
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
