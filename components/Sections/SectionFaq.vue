<template>
  <section class="faq" :class="{ 'view-padding': noPadding }">
    <div class="container container--content">
      <SectionTitle
        :subquestion="subquestion"
        :title="question"
        :is-inverted="true"
      />
      <FaqGrid :faqs="getFaqs()" />

      <footer class="faq__footer">
        <div class="faq__tagline" v-html="tagline" />
        <div class="faq__cta">
          <SectionTitle :title="'Any other questions?'" :is-inverted="true" />
          <a
            :href="'#'"
            :class="'button-primary button-primary--blue button-primary--wide'"
            @click="open_feedback"
          ><span>Get help</span></a>

          <FeedbackModal ref="feedback" />
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button';
import FaqGrid from '@/components/Faqs/FaqGrid';
import SectionTitle from '@/components/SectionParts/SectionTitle';
import FeedbackModal from '@/components/FeedbackModal/FeedbackModal';

export default {
  name: 'SectionFAQ',
  components: {
    SectionTitle,
    FaqGrid,
    Button,
    FeedbackModal
  },
  props: {
    noPadding: {
      type: Boolean,
      required: false
    },
    faqs: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      subquestion: 'You ask – we answer',
      question: 'Frequently asked questions',
      tagline:
        'We make community.</br> We create creative environment. </br> We search for the best answerures.',
      opened_feedback: false
    };
  },
  methods: {
    getFaqs () {
      return this.faqs;
    },
    open_feedback (e) {
      e.preventDefault();
      this.$refs.feedback.scrollSwitcher(true);
      return false;
    }
  }
};
</script>
