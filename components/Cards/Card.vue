<template>
  <div class="card__block" :class="{'card__block--tutorial': isTutorial}">
    <div class="card__img">
      <img :src="card.image.url" :alt="card.image.alt" />
    </div>
    <div class="card__content">
      <header class="card__header">
        <h3 class="card__title name">{{ card.title }}</h3>
        <h4 class="card__subtitle h3" v-if="!isTutorial">{{ card.subtitle }}</h4>
      </header>
      <div class="card__text text" v-html="card.text"></div>
      <footer class="card__footer" v-if="isTutorial">
        <Button :link="card.link" text="play tutorial" type="secondary" color="play" />
      </footer>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Card",
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
    }
  }
};
</script>
