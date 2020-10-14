<template>
  <div class="pricecard__block">
    <div class="pricecard__content">
      <p class="pricecard__title">
        {{ card.title }}
      </p>
      <p class="pricecard__subtitle">
        {{ card.subtitle }}
      </p>
      <p v-if="duration === 'year'" class="pricecard__price">
        {{ card.currency }}{{ card.priceYear }}
      </p>
      <p v-if="duration !== 'year'" class="pricecard__price">
        {{ card.currency }}{{ card.price }}
      </p>
      <p v-if="duration === 'year'" class="pricecard__desc">
        {{ card.desc_year }}
      </p>
      <p v-if="duration !== 'year'" class="pricecard__desc">
        {{ card.desc_month }}
      </p>
        <Button  @click="subscribe" :link="'javascript:void(0);'" :text="card.buttontext" type="primary" width="wide" />
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
  methods:{
    subscribe(e){
      if(!this.user){
        this.$router.replace('/login')
      }else{
        this.$router.replace('/profile/dashboard?payment=true')
      }
    }
  },
  computed:{
    user(){
      return this.$auth.user ? this.$auth.user.user : null;
    },
    payment(){
      if(this.$auth.user && this.$auth.user.user.payment){
        const payment = this.$auth.user.user.payment;
        if(payment && payment.last4){
          return payment;
        }
      }
      return false;
    },
  }
};
</script>
