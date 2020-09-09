<template>
  <div class="faq__block">
    <h3 class="faq__title">{{ faq.question }}</h3>
    <div class="faq__text">
      <div class="faq__wysiwyg" v-html="faq.answer"></div>
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
