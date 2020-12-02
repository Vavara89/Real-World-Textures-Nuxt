<template>
  <div @click="openFaq" class="faq__block">
    <h3 class="faq__title">{{ faq_question }}</h3>
    <div v-if="isOpened" class="faq__text">
      <div class="faq__wysiwyg" v-html="faq.answer"></div>
    </div>
  </div>
</template>

<script>
import { isMobileDevice } from "~/utils";
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
      isOpened: true,
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
  methods: {
    openFaq() {
      if (isMobileDevice()) {
        this.isOpened = !this.isOpened;
      }
    },
  },
};
</script>
