<template>
  <div class="pricecard__block">
    <div class="pricecard__header">
      <div class="pricecard__title">
        {{ card.title }}
      </div>
      <div v-if="duration === 'year'" class="pricecard__price">
        {{ card.currency }}{{ card.price_year }}
      </div>
      <div v-else class="pricecard__price">
        {{ card.currency }}{{ card.price_month }}
      </div>
    </div>
    <div class="pricecard__body">
      <div>
        <div class="pricecard__descr">
          <div v-if="duration === 'year'" class="pricecard__descr-title">
            {{ card.descr_title_year }}
          </div>
          <div v-else class="pricecard__descr-title">
            {{ card.descr_title_month }}
          </div>
          <div class="pricecard__descr-subtitle">
            {{ card.descr_subtitle }}
          </div>
        </div>
        <div>
          <p class="pricecard__text">
            {{ card.descr_text1 }}
          </p>
          <p class="pricecard__text">
            {{ card.descr_text2 }}
          </p>
          <p class="pricecard__text">
            {{ card.descr_text3 }}
          </p>
        </div>
      </div>
      <Button :link="'javascript:void(0);'" :text="card.buttontext" type="primary" width="wide" @click="subscribe" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'PriceCard',
  components: {
    Button
  },
  props: {
    card: {
      type: Object,
      required: true
    },
    duration: {
      type: String,
      default: ''
    }
  },
  computed: {
    user () {
      return this.$auth.user ? this.$auth.user.user : null;
    },
    payment () {
      if (this.$auth.user && this.$auth.user.user.payment) {
        const payment = this.$auth.user.user.payment;
        if (payment && payment.last4) {
          return payment;
        }
      }
      return false;
    }
  },
  methods: {
    subscribe (e) {
      if (!this.user) {
        this.$router.replace('/login');
      } else {
        this.$router.replace('/profile/dashboard?payment=true');
      }
    }
  }
};
</script>
