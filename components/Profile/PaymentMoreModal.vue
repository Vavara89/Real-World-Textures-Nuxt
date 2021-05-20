<template>
  <div v-if="opened">
    <div class="modal card is-background centered-window min-height">
      <div class="inner address is-card">
        <span class="close" @click="toggleMessage()" />
        <h2>Please enter credits count</h2>
        <h3 class="upper upper-perex">
          Please enter credits count
        </h3>
        <input
          min="10"
          v-model="quantity"
          type="number"
          class="input"
          placeholder=""
        >
        <p>0,4 EUR/1 CREDIT, MINIMUM 10 CREDITS = 4 EUR</p>
      </div>
      <div class="inner">
        <button @click="payment" type="submit" class="email special">
          Pay now
          <div class="ar" />
        </button>
      </div>

    </div>
    <div class="silkscreen" />
  </div>
</template>

<script>
import Success from '@/components/Success/Success';
import commercial from "~/collectors/commercial";

export default {
  components: {
    Success
  },
  data () {
    return {
      opened: false,
      saved: false,
      send: false,
      number: null,
      quantity: 100
    };
  },
  methods: {
    scrollSwitcher (state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        this.send = false;
        this.saved = false;
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    },
    toggleMessage (close = false) {
      this.scrollSwitcher(close);
    },
    async payment() {
      if (this.quantity >= 10) {
        const session = await commercial.initPay({
          quantity:this.quantity
        });
        console.log(session);
        const stripe = Stripe("pk_test_51H6sy0JPF3NHrntPzr6I0sc9Un4TtbyQsrbiLmBpLOZMHoDu9Fj07Xrq4Jana1ZC9cFk8yijeUctn4str7OPRVt000C6AS116F");
        await stripe.redirectToCheckout({ sessionId: session.data.id });
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_loginmodals.scss";
</style>
