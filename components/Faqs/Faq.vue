<template>
  <div class="faq__block">
    <h3 class="faq__title">{{ faq_question }}</h3>
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
  computed: {
    faq_question() {
      if (this.faq.question.length > 100) {
        return this.faq.question.substring(0, 110) + '…';
      }
      return this.faq.question;
    }
  }
};
</script>
