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
      duration: 'year'
    };
  },
  computed: {
    cards () {
      const prices = this.$store.getters.prices;
      console.log('prices', this.$store.getters.prices);
      if (!prices.length) {
        return [];
      }
      const products = {
        pro: prices.filter(item => item.stripe_product.is_pro === true),
        freelancer: prices.filter(item => item.stripe_product.is_pro === false)
      };
      if (products.pro.length && products.freelancer.length) {
        const titles = {
          pro: products.pro[0].stripe_product.name,
          freelancer: products.freelancer[0].stripe_product.name
        };
        const price_year = {
          pro: products.pro.filter(item => item.is_year === true)[0],
          freelancer: products.freelancer.filter(item => item.is_year === true)[0]
        };
        const price_month = {
          pro: products.pro.filter(item => item.is_year === false)[0],
          freelancer: products.freelancer.filter(item => item.is_year === false)[0]
        };

        const free = {
          title: 'Free',
          descr_title_month: 'Free content',
          descr_title_year: 'Free content',
          descr_text1: 'Sign up for free and enjoy our free content',
          buttontext: 'GET FREE',
          buttonlink: '/'
        };
        const products_plans = [
          {
            title: 'Basic',
            descr_title_month: `${price_month.freelancer.credits} credits`,
            descr_title_year: `${price_month.freelancer.credits} credits`,
            descr_subtitle: '1 month',
            descr_text1: 'One month of Credit Rollover With Active Subscription',
            descr_text2: 'For 200 credits you get aprox. 30 textures, or 10 models, or 30 hdri',
            descr_text3: '',
            currency: '$',
            price_month: `${price_month.freelancer.amount}`,
            price_year: `${parseInt(price_year.freelancer.amount) / 12}`,
            buttontext: 'GET BASIC',
            buttonlink: '/'
          },
          {
            title: 'Professional',
            descr_title_month: `${price_month.pro.credits} credits`,
            descr_title_year: `${price_month.pro.credits} credits`,
            descr_subtitle: '3 month',
            descr_text1: 'Three months of Credit Rollover With Active Subscription',
            descr_text2: 'For 700 credits you get aprox. 80 textures, or 30 models,  30 hdri other asset types',
            descr_text3: '',
            currency: '$',
            price_month: `${price_month.pro.amount}`,
            price_year: `${parseInt(price_year.pro.amount) / 12}`,
            buttontext: 'GET PROFESSIONAL',
            buttonlink: '/'
          }
        ];
        if (!this.$auth.user) {
          products_plans.unshift(free);
        }
        return products_plans;
      }
      return [];
    }
  },
  methods: {
    childMessageReceived (duration) {
      console.log(duration);
      if (duration === 'month') {
        this.duration = duration;
      }
      if (duration === 'year') {
        this.duration = duration;
      }
    },
    getLink () {
    }
  }
};
</script>
