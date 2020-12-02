<template>
  <div @click="isOpened = !isOpened" class="faq__block">
    <h3 class="faq__title">{{ faq_question }}</h3>
    <div v-if="isOpened" class="faq__text">
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
      required: true,
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  computed: {
    faq_question() {
      if (this.faq.question.length > 100) {
        return this.faq.question.substring(0, 110) + "…";
      }
      return this.faq.question;
    },
  },
};
</script>
