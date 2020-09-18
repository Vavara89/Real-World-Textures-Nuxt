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
      duration: ''
    };
  },
  computed:{
    cards(){
      const prices = this.$store.getters.prices;
      if(!prices.length){
        return [];
      }
      const products = {
        'pro':prices.filter(item => item.stripe_product.is_pro === true),
        'freelancer': prices.filter(item => item.stripe_product.is_pro === false)
      };
      if(products.pro.length && products.freelancer.length){
        const titles = {
          'pro': products.pro[0].stripe_product.name,
          'freelancer': products.freelancer[0].stripe_product.name,
        };
        const price_year = {
            'pro':products.pro.filter(item => item.is_year === true)[0],
            'freelancer':products.freelancer.filter(item => item.is_year === true)[0],
        };
        const price_month = {
          'pro':products.pro.filter(item => item.is_year === false)[0],
          'freelancer':products.freelancer.filter(item => item.is_year === false)[0],
        };

        return [
          {
            title: titles.pro,
            subtitle: 'per month/person',
            currency: '$',
            price: price_month.pro.amount,
            priceYear: parseInt(price_year.pro.amount)/12,
            desc: `${price_month.pro.credits} credits/month`,
            desc_month: `${price_month.pro.credits} credits/month`,
            desc_year: `${parseInt(price_year.pro.credits)/12} credits/month`,
            buttontext: `Get ${titles.pro}`,
            buttonlink: '/'
          },
          {
            title: titles.freelancer,
            subtitle: 'per month/seat',
            currency: '$',
            price: price_month.freelancer.amount,
            priceYear: parseInt(price_year.freelancer.amount)/12,
            desc: `${price_month.freelancer.credits} credits/month`,
            desc_month: `${price_month.freelancer.credits} credits/month`,
            desc_year: `${parseInt(price_year.freelancer.credits)/12} credits/month`,
            buttontext: `Get ${titles.freelancer}`,
            buttonlink: '/'
          }
        ];
      }
      return  [];
    }
  },
  methods: {
    childMessageReceived (duration) {
      if (duration === 'month') {
        this.duration = duration;
      }
      if (duration === 'year') {
        this.duration = duration;
      }
    },
    getLink(){
    }
  }
};
</script>
