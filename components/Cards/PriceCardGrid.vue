<template>
  <ul class="pricecards">
    <li v-for="(card, index) in cards" :key="'logo-' + index" class="pricecard">
      <PriceCard :card="card" :duration="duration" />
    </li>
  </ul>
</template>

<script>
import PriceCard from '@/components/Cards/PriceCard';

export default {
  name: 'PriceCardGrid',
  components: {
    PriceCard
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    duration: {
      type: String,
      default: ''
    }
  }
};
</script>
