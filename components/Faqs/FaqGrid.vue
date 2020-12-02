<template>
  <ul class="faq__grid">
    <li class="faq__item" v-for="(faq, index) in faqs" :key="'id-' + index">
      <Faq :faq="faq" />
    </li>
  </ul>
</template>

<script>
import Faq from "@/components/Faqs/Faq";

export default {
  name: "FaqGrid",
  components: {
    Faq,
  },

  props: {
    faqs: {
      type: Array,
      required: true,
    },
  },
};
</script>
