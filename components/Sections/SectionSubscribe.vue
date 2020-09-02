<template>
  <section class="subscribe" :class="{'profile': isProfile}">
    <div class="container container--content">
      <div class="subscribe-outer">
        <div class="subscribe-inner">
          <SectionTitle :title="title" :is-centered="false" :is-inverted="true" />
          <div class="toggle-button-wrap">
            <ToggleSwitch @setDuration="childMessageReceived" />
          </div>
          <div class="price-table">
            <PriceCardGrid :cards="cards" :duration="duration" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionParts/SectionTitle';
import ToggleSwitch from '@/components/ToggleSwitch';
import PriceCardGrid from '@/components/Cards/PriceCardGrid';

export default {
  name: 'SectionSubscribe',
  components: {
    SectionTitle,
    ToggleSwitch,
    PriceCardGrid
  },
  props: {
    isProfile: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      title: 'Subscribe',
      cards: [
        {
          title: 'Freelancer',
          subtitle: 'per month/person',
          currency: '$',
          price: '17',
          priceYear: '13',
          desc: '200 credits/month',
          buttontext: 'Get Freelancer',
          buttonlink: '/'
        },
        {
          title: 'Studio',
          subtitle: 'per month/seat',
          currency: '$',
          price: '35',
          priceYear: '27',
          desc: '700 credits/month',
          buttontext: 'Get Studio',
          buttonlink: '/'
        }
      ],
      duration: ''
    };
  },
  methods: {
    childMessageReceived (duration) {
      if (duration === 'month') {
        this.duration = duration;
      }
      if (duration === 'year') {
        this.duration = duration;
      }
    }
  }
};
</script>
