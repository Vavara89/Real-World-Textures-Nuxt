<template>
  <div class="card__block" :class="{'card__block--tutorial': isTutorial}">
    <div @click="$emit('selected')" class="card__img">
      <img :src="card.image.url" :alt="card.image.alt">
    </div>
    <div class="card__content">
      <header @click="$emit('selected')" class="card__header">
        <h3 class="card__title name" :class="{'profile': isProfile}">
          {{ card.title }}
        </h3>
        <h4 v-if="!isTutorial" class="card__subtitle h3">
          {{ card.subtitle }}
        </h4>
      </header>
      <span class="buttonprofile" v-if="isProfile">
        <Button
          :link="card.link"
          text="Go to gallery"
          type="secondary"
          color=""
        />
      </span>
      <div class="card__text text" v-html="card.text" />
      <footer v-if="isTutorial" class="card__footer">
        <Button :link="card.link" text="play tutorial" type="secondary" color="play" />
      </footer>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'Card',
  components: {
    Button
  },
  props: {
    card: {
      type: Object,
      required: true
    },
    isTutorial: {
      type: Boolean,
      required: false
    },
    isProfile: {
      type: Boolean,
      required: false
    }
  }
};
</script>
