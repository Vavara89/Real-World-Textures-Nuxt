<template>
  <ul class="cards" :class="{'cards--tutorials': isMore}">
    <li
      v-for="(card, index) in cards"
      :key="'logo-' + index"
      class="card"
      :class="{'view-margin': isMore, 'view-tutorial': isTutorial,}"
    >
      <Card @selected="toggleSidebar(index)" :card="card" :is-profile="isProfile" :is-tutorial="isTutorial" />
    </li>
  </ul>
</template>

<script>
import Card from '@/components/Cards/Card';

export default {
  name: 'CardGrid',
  components: {
    Card
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    isMore: {
      type: Boolean,
      required: false
    },
    isTutorial: {
      type: Boolean,
      required: false
    },
    isProfile: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    toggleSidebar (index) {
      this.cards.forEach((card) => {
        card.sidebar.isOpened = false;
      });
      this.cards[index].sidebar.isOpened = !this.cards[index].sidebar.isOpened;
    }
  }
};
</script>
