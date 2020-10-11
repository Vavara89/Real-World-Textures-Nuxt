<template>
  <section class="offer">
    <div class="container container--box">
      <div class="offer__box">
        <SectionTitle
          :subtitle="subtitle"
          :title="title"
          :is-centered="true"
          :is-inverted="true"
        />
        <div class="offer__button">
        <Button
          :link="button.link"
          :text="button.text"
          type="primary"
          color="green"
        />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionParts/SectionTitle';
import Button from '@/components/Button';

export default {
  name: 'SectionOffer',
  components: {
    SectionTitle,
    Button
  },
  props: {
    subtitle: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    button: {
      type: Object,
      required: true
    }
  }
};
</script>
