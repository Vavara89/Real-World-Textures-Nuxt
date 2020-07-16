<template>
  <div class="faq__block">
    <h3 class="faq__title">{{ faq.title }}</h3>
    <div class="faq__text">
      <div class="faq__wysiwyg" v-html="faq.text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  props: {
    faq: {
      type: Object,
      required: true
    }
  },
};
</script>
